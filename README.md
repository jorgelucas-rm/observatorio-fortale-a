# Observatório Fortaleça

O objetivo desse projeto é disponibilizar informações sobre doenças no estado do Ceará, atualmente temos as seguintes informações:
- 😷 Covid-19 (Há três anos atrás)
- 🦟 Dengue

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

- Git
- Docker
- Docker-Compose

### 🔧 Instalação

Clone o Repositório
```
git clone https://github.com/jorgelucas-rm/observatorio-fortaleca.git
```
Acesse a pasta clonada
```
cd observatorio-fortaleca
```
Crie os containers da aplicação
```
docker compose up --build
```

### 🌎 Uso

Depois é só acessar: 
- http://localhost:5173 (Dados sobre a Covid-19)
- http://localhost:5174 (Dados sobre a Dengue) no browser

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Desenvolvedor Backend** - *Jorge Lucas* - [jorgelucas-rm](https://github.com/jorgelucas-rm)
* **Desenvolvedor Frontend** - *Edduardo Nogueira* - [Eddev7](https://github.com/Eddev7)

## 🍕 API's consumidas

* **Covid-19 Brazil API** - https://covid19-brazil-api.vercel.app/
* **Info Dengue** - https://info.dengue.mat.br/
