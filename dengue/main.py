from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controller.data_controller import Controller

app = FastAPI()

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens
    allow_credentials=True,  # Permite o envio de cookies
    allow_methods=["*"],  # Permite todos os métodos HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Inclui o roteador do controller
app.include_router(Controller.router)
