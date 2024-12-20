'use client';
import { useEffect, useState } from "react"

export default function Efeitos(){
    // const [cont, setCont] = useState(0);
    // const [cont2, setCont2] = useState(0);
    // useEffect(()=> {
    //     console.log('Renderizou')
    // },[cont, cont2])

    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);
    const [ufSelected, setUfSelected] = useState('');
    const [citySelected, setCitySelected] = useState('');

    const getUfs = async ()=> {
        try{
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            if(!response.ok){
                throw new Error('Erro ao buscar dados: '+ response.statusText);
            }
            const data = await response.json();
            setUfs(data);
            console.log(data);

        }catch(error){
            console.log('Ocorreu algum erro: ' + error)
        }

    }

    useEffect(()=> {
        getUfs();
    },[])


    const getCities= async ()=> {
        try{
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelected}/municipios?orderBy=nome`);
            if(!response.ok){
                throw new Error('Erro ao buscar dados: '+ response.statusText);
            }
            const data = await response.json();
            setCities(data);
            console.log(data);
    
        }catch(error){
            console.log('Ocorreu algum erro: ' + error)
        }
    
    }
    
    useEffect(()=> {
        getUfs();
    },[])
    
    useEffect(()=> {
        getCities();
    },[ufSelected])
    
    

    return (
        <div>
            <h1>Efeitos Colaterais / Use Effect</h1>
            {
                <select onChange={(ev) => {setUfSelected(ev.target.value), setCitySelected('')}}>
                    <option value="">Selecione o estado</option>
                    {ufs.map((uf) => (
                        <option
                            value={uf.id}
                            key={uf.id}>
                                {uf.nome}
                        </option>
                    ))}
                </select>
            }

            {
                <select onChange={(ev) => setCitySelected(ev.target.value)}>
                    <option value="">Selecione a cidade</option>
                    {cities.map((city) => (
                        <option
                            value={city.nome}
                            key={city.nome}>
                                {`${city.nome}`}
                        </option>
                    ))}
                </select>
            }

            {citySelected && <p>{citySelected}</p>}
        </div>
    )
}



