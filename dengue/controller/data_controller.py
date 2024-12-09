from fastapi import APIRouter
from service.data_service import DataService

class Controller:
    router = APIRouter()

    @router.get("/")
    def hello_world():
        return {"message": "Hello world"}

    @router.get("/api/v1/fortaleza")
    async def get_data():
        return await DataService.get_data(2304400)
    
    @router.get("/api/v1/maracanau")
    async def get_data():
        return await DataService.get_data(2307650)
    
    @router.get("/api/v1/caucaia")
    async def get_data():
        return await DataService.get_data(2303709)
    
    @router.get("/api/v1/eusebio")
    async def get_data():
        return await DataService.get_data(2304285)