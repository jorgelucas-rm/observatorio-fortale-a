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

    const [cases, setCases] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [suspects, setSuspects] = useState([]);
    const [refuses, setRefuses] = useState([]);
    const [label, setLabel] = useState([]);

    function labelOption(optionType) {
        if(optionType == 'last-week') setLabel(['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'])
        if(optionType == 'last-month') setLabel(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28'])
        if(optionType == 'last-year') setLabel(['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'])
    }

    useEffect(() => {
        async function fetchData() {
            setLoad(true)
            const response = await api.get(optionType);
            const responseData = response.data;
            setCases(responseData.map((e) => e.cases))
            setDeaths(responseData.map((e) => e.deaths))
            setSuspects(responseData.map((e) => e.suspects))
            setRefuses(responseData.map((e) => e.refuses))
            setLoad(false)
        }
        fetchData();
        labelOption(optionType);
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
    
    const dataCases = {
        labels: label,
        datasets: [
            {
                label: "Casos",
                data: cases,
                borderColor: "orange",
            },
        ]
    };

    const dataDeaths = {
        labels: label,
        datasets: [
            {
                label: "Mortes",
                data: deaths,
                borderColor: "red",
            },
        ]
    };
    
    const dataSuspects = {
        labels: label,
        datasets: [
            {
                label: "Suspeitas",
                data: suspects,
                borderColor: "orange",
            },
        ]
    };
    
    const dataRefuses = {
        labels: label,
        datasets: [
            {
                label: "Recusaram",
                data: refuses,
                borderColor: "gray",
            },
        ]
    };

    return <div className={"w-3/4 grid grid-cols-2 items-center gap-5 " + `${load ? 'hidden' : ''}`}>
        <div><Line options={options} data={dataCases}/></div>
        <div><Line options={options} data={dataDeaths}/></div>
        <div><Line options={options} data={dataSuspects}/></div>
        <div><Line options={options} data={dataRefuses}/></div>
    </div> 
}