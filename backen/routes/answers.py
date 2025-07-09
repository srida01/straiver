from models.models import Answer, Question
from fastapi import APIRouter, Depends
from sqlmodel import Session
from db import get_session
from typing import List
from fastapi import HTTPException
from pydantic import BaseModel

class AnswerCreate(BaseModel):
    content: str
    user_id: int
    question_id: int
class AnswerCreation(BaseModel):
    answer_id: int
    content: str
    user_id: int
    question_id: int

class AnswerUpdate(BaseModel):
    answer_id: int
    content: str | None = None
    user_id: int
    question_id:int 

router = APIRouter(prefix="/users", tags=["Answers"])
@router.post("/postanswer",response_model=AnswerCreation)
def create_answer(answer: AnswerCreate, session: Session = Depends(get_session)):
    answer_data = Answer.model_validate(answer)
    session.add(answer_data)    
    session.commit()
    session.refresh(answer_data)
    return answer_data


@router.put("/{answer_id}", response_model=AnswerUpdate)
def update_question(answer_id: int, answer: Answer, session: Session = Depends(get_session)):
    db_answer = session.get(Answer, answer_id)
    if not db_answer:
        raise HTTPException(status_code=404, detail="Question not found")
    db_answer.content = answer.content
    session.add(db_answer)
    session.commit()
    session.refresh(db_answer)
    return db_answer

@router.delete("/{answer_id}", response_model=AnswerCreation)
def delete_answer(answer_id: int, session: Session = Depends(get_session)):
    answer = session.get(Answer, answer_id)
    if not answer:
        raise HTTPException(status_code=404, detail="Answer not found")
    session.delete(answer)
    session.commit()
    return answer

