import LineGraph from "./components/Line"
import { useState } from "react";
import Loading from "./components/loading";
import icon from './assets/icon.svg'

function App() {

  const [type, setType] = useState('fortaleza');
  const [load, setLoad] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-10 text-white h-screen ">
        <header className="flex flex-col items-center">
          <h1 className="text-4xl uppercase font-bold mt-2 flex justify-center items-center gap-4">Relatorio Dengue Semanal <img src={icon} className="w-20"></img></h1>
        </header>
        <section className="w-full flex flex-col items-center">
          <header>
            <div className="flex gap-2">
              <p className="text-2xl">Assim está a Dengue em</p>
              <select
                id="gender"
                value={type}
                onChange={(e) => {
                  setType(e.target.value)
                }}      
                className='p-2 rounded-lg border border-solid border-white bg-transparent'
              >
                <option value="fortaleza">Fortaleza</option>
                <option value="maracanau">Maracanaú</option>
                <option value="caucaia">Caucaia</option>
                <option value="eusebio">Eusebio</option>
              </select>
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
