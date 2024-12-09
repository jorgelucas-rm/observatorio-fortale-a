import LineGraph from "./components/Line"
import { useState } from "react";
import Loading from "./components/loading";
import covid from './assets/covid.svg'

function App() {

  const [type, setType] = useState('last-week');
  const [load, setLoad] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-10 text-white h-screen ">
        <header className="flex flex-col items-center">
          <h1 className="text-4xl uppercase font-bold mt-10 flex justify-center items-center gap-2">Como estava a Covid <img src={covid} alt="" className="w-14"/> há 3 anos atrás?</h1>
        </header>
        <section className="w-full flex flex-col items-center">
          <header>
            <div className="flex gap-2">
              <p className="text-2xl">Assim estava a covid nesta(e)</p>
              <select
                id="gender"
                value={type}
                onChange={(e) => {
                  setType(e.target.value)
                }}      
                className='p-2 rounded-lg border border-solid border-white bg-transparent'
              >
                <option value="last-week">Semana</option>
                <option value="last-month">Mes</option>
                <option value="last-year">Ano</option>
              </select>
              <p className="text-2xl">a 3 anos atras</p>
            </div>
          </header>
          
          <Loading isLoad={load}/>
          <LineGraph key={type} optionType={type} setLoad={setLoad} load={load}/>
        </section>
      </div>
    </>
  )
}

export default App
