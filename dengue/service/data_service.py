import requests
from fastapi import HTTPException
from datetime import date

class DataService:
    @staticmethod
    async def get_data(geocode):
        ano_iso, semana_iso, dia_iso = date.today().isocalendar()
        
        url = "https://info.dengue.mat.br/api/alertcity"
        disease = "dengue"
        format = "json"
        ew_start = semana_iso - 5
        ew_end = semana_iso
        ey_start = ano_iso
        ey_end = ano_iso

        params = {
            "disease": disease,
            "geocode": geocode,
            "format": format,
            "ew_start": ew_start,
            "ew_end": ew_end,
            "ey_start": ey_start,
            "ey_end": ey_end
        }

        try:
            response = requests.get(url, params=params)
            response.raise_for_status()
            dados = response.json()
        except Exception as e:
            raise HTTPException(status_code=500, detail="Erro ao acessar os dados do Infodengue.")

        if not dados:
            raise HTTPException(status_code=404, detail="Nenhum dado encontrado para a semana anterior.")

        casos_por_semana = []
        for item in dados:
            casos_por_semana.insert(0, {
                "semana": item.get("SE"),
                "casos": item.get("casos")
            })

        return casos_por_semana