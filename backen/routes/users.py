from fastapi import APIRouter
from sqlmodel import Session, SQLModel
from models.models import User
from db import get_session
from fastapi import Depends

router = APIRouter(prefix="/users", tags=["Users"])
class UserCreate(SQLModel):
    username: str
    email: str 
    password: str
class UserCreation(SQLModel):
    user_id: int
    username: str
    email: str

@router.post("/postuser",response_model=UserCreation)
def create_user(user: UserCreate,session: Session = Depends(get_session)):
    db_user = User.model_validate(user)
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    userr=db_user.dict()
    return userr

@router.get("/{user_id}", response_model=UserCreation)
def get_user(user_id: int, session: Session = Depends(get_session)):
    user = session.get(User, user_id)
    return user 

