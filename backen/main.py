from fastapi import FastAPI, Depends
from sqlmodel import *
from db import engine
import os
from contextlib import asynccontextmanager
from routes.users import router as user_router
from routes.questions import router as question_router
from routes.answers import router as answer_router


def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield

app = FastAPI(lifespan=lifespan) 


@app.get("/")
async def read_root():
    return {"message": "Welcome to the Straiver API!"}
app.include_router(user_router)
app.include_router(question_router)
app.include_router(answer_router)