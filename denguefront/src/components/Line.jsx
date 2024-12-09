import { Line } from "react-chartjs-2";
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { useEffect, useState } from "react";
import api from "../config/axiosConfig";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function LineGraph({ optionType, setLoad, load }) {

    const [casos, setCasos] = useState([]);
    const [label, setLabel] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setLoad(true)
            const response = await api.get(optionType);
            const responseData = response.data;
            setLabel(responseData.map((e) => `${String(e.semana).slice(4,6)}º`))
            console.log(responseData)
            setCasos(responseData.map((e) => e.casos))
            setLoad(false)
        }
        fetchData();
    },[])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white', // Cor do texto da legenda
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // Cor do texto no eixo X
                },
                grid: {
                    color: 'white', // Cor das linhas de fundo no eixo X
                }
            },
            y: {
                ticks: {
                    color: 'white', // Cor do texto no eixo Y
                },
                grid: {
                    color: 'white', // Cor das linhas de fundo no eixo Y
                }
            }
        }    
    };
    
    const dataCasos = {
        labels: label,
        datasets: [
            {
                label: "Casos",
                data: casos,
                borderColor: "orange",
            },
        ]
    };

    return <div className={"w-3/4 flex justify-center items-center gap-5 m-10 " + `${load ? 'hidden' : ''}`}>
        <Line options={options} data={dataCasos}/>
    </div> 
}