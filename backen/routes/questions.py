from models.models import Question
from fastapi import APIRouter, Depends
from sqlmodel import Session, SQLModel, select
from db import get_session
from typing import List,Optional
from fastapi import HTTPException 

class QuestionCreate(SQLModel):
    title: str
    user_id: int

class QuestionCreation(SQLModel):
    question_id: int
    title: str
    user_id: int
  


class QuestionUpdate(SQLModel):
    title: str | None= None
    user_id: int 
    
    

router = APIRouter(prefix="/questions", tags=["Questions"])

@router.post("/postquestion", response_model=QuestionCreation)
def create_question(question: QuestionCreate,session: Session = Depends(get_session)):
    db_ques = Question.model_validate(question)
    session.add(db_ques)
    session.commit()
    session.refresh(db_ques)
    return db_ques




@router.get("/questions",response_model=List[QuestionCreation])
def get_all_questions(session: Session = Depends(get_session)):
    questions = session.exec(select(Question)).all()
    return questions

@router.get("/{question_id}")
def get_question(question_id: int, session: Session = Depends(get_session)):
    question = session.get(Question, question_id)
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")
    return question.answer

@router.delete("/{question_id}",response_model=QuestionCreation)
def delete_question(question_id: int, session: Session = Depends(get_session)):
    question = session.get(Question, question_id)
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")
    session.delete(question)
    session.commit()
    return question

@router.put("/{question_id}", response_model=QuestionUpdate)
def update_question(question_id: int,question:QuestionCreate, session: Session = Depends(get_session)):
    question_data = Question.model_validate(question)
    db_question = session.get(Question, question_id)
    if not db_question:
        raise HTTPException(status_code=404, detail="Question not found")
    db_question.title = question_data.title
    session.add(db_question)
    session.commit()
    session.refresh(db_question)
    return db_question
    
   
