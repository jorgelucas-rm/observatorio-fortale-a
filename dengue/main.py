from fastapi import FastAPI
from controller.data_controller import Controller

app = FastAPI()
app.include_router(Controller.router)