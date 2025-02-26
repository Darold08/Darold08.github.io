'use client';  
import React, { useEffect, useState } from "react"; 
import styles from './consulta.module.css'; 
import Header from "@/components/Header";

const urlBanco = "https://api-clinica-2a.onrender.com";

export default function Consultas() { 
    const [pesquiMedico, setPesquiMedico] = useState(''); 
    const [pesquiPaciente, setPesquiPaciente] = useState('');
    const [showPopupMedico, setShowPopupMedico] = useState(false); 
    const [showPopupPaciente, setShowPopupPaciente] = useState(false); 
    const [consultas, setConsultas] = useState([]);
    const [consultasFiltradas, setConsultasFiltradas] = useState([]); 

    const togglePopupMedico = async () => { 
        setShowPopupMedico((prev) => !prev); 
        if (!showPopupMedico) {
            await listarConsultas(); 
        }
    }; 

    const togglePopupPaciente = async () => { 
        setShowPopupPaciente((prev) => !prev); 
        if (!showPopupPaciente) {
            await listarConsultas(); 
        }
    };

    async function listarConsultas() { 
        try {
            const response = await fetch(`${urlBanco}/consultas`);
            if (!response.ok) throw new Error("Erro ao buscar dados: " + response.statusText);

            const data = await response.json();
            setConsultas(data);
            setConsultasFiltradas(data); 
        } catch (error) {
            console.error('Erro ao buscar consultas:', error);
        }
    }

    function pesquisaMudancaMedico(medico) { 
        setPesquiMedico(medico);

        if (medico.trim() === "") {
            setConsultasFiltradas(consultas); 
        } else {
            const filtradas = consultas.filter((consulta) =>
                consulta.medico.toLowerCase().includes(medico.toLowerCase())
            );
            setConsultasFiltradas(filtradas);
        }
    }

    function pesquisaMudancaPaciente(paciente) {
        setPesquiPaciente(paciente);

        if (paciente.trim() === "") {
            setConsultasFiltradas(consultas);
        } else {
            const filtradas = consultas.filter((consulta) =>
                consulta.paciente.toLowerCase().includes(paciente.toLowerCase())
            );
            setConsultasFiltradas(filtradas); 
        }
    }

    useEffect(() => {
        listarConsultas();
    }, []);

    return ( 
        <body>
            <Header/>
            <div className={styles.divMeio}> 
                <div className={styles.divPrincipal}> 
                    <div className={styles.divTitulo}> 
                        <h1 className={styles.title}>Lista de Consultas</h1> 
                    </div> 

                    <div className={styles.divBotao}>
                        <div className={styles.divBotaoMed}> 
                            <button onClick={togglePopupMedico} className={styles.searchButton}>
                                Buscar por Médico
                            </button>
                        </div> 
                        <div className={styles.divBotaoPac}>
                            <button onClick={togglePopupPaciente} className={`${styles.searchButton} ${styles.pacienteBt}`}>
                                Buscar por Paciente
                            </button>
                        </div>
                    </div>
                        
                    
                    
                    {showPopupMedico && ( 
                        <div className={styles.popUpDiv} onClick={togglePopupMedico}> 
                            <div className={styles.popUp} onClick={(e) => e.stopPropagation()}> 
                                <button className={styles.fechar} onClick={togglePopupMedico}>Fechar</button>

                                <input 
                                    type="text"
                                    className={styles.pesquisaInput}
                                    value={pesquiMedico}
                                    onChange={(e) => pesquisaMudancaMedico(e.target.value)}
                                    placeholder="Digite o nome do médico"
                                    onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                                /> 

                                <div className={styles.consultaList}> 
                                    {consultasFiltradas.length > 0 ? (
                                        consultasFiltradas.map((consulta) => ( 
                                            <div key={consulta.id} className={styles.consultaItem}> 
                                                {consulta.medico}
                                            </div> 
                                        ))
                                    ) : (
                                        <p className={styles.nenhumEncontrado}>Nenhuma consulta encontrada para o médico.</p>
                                    )}
                                </div> 
                            </div> 
                        </div> 
                    )}

                    {showPopupPaciente && ( 
                        <div className={styles.popUpDiv} onClick={togglePopupPaciente}> 
                            <div className={styles.popUp} onClick={(e) => e.stopPropagation()}> 
                                <button className={styles.fechar} onClick={togglePopupPaciente}>Fechar</button>

                                <input 
                                    type="text" 
                                    className={styles.pesquisaInput} 
                                    value={pesquiPaciente} 
                                    onChange={(e) => pesquisaMudancaPaciente(e.target.value)}
                                    placeholder="Digite o nome do paciente" 
                                    onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                                /> 

                                <div className={styles.consultaList}> 
                                    {consultasFiltradas.length > 0 ? (
                                        consultasFiltradas.map((consulta) => ( 
                                            <div key={consulta.id} className={styles.consultaItem}> 
                                                {consulta.paciente}
                                            </div> 
                                        ))
                                    ) : (
                                        <p className={styles.nenhumEncontrado}>Nenhuma consulta encontrada para o paciente.</p>
                                    )}
                                </div> 
                            </div> 
                        </div> 
                    )}

                    <div className={styles.divTabela}>
                        <table className={styles.tabConsultas}> 
                            <thead className={styles.tabHead}> 
                                <tr className={styles.tituloTab}> 
                                    <th className={styles.linhasTit}>ID</th> 
                                    <th className={styles.linhasTit}>Médico</th> 
                                    <th className={styles.linhasTit}>Especialidade</th> 
                                    <th className={styles.linhasTit}>Paciente</th> 
                                    <th className={styles.linhasTit}>Tipo</th> 
                                </tr> 
                            </thead> 
                            <tbody className={styles.corpoTab}> 
                                {consultas.map((consulta) => ( 
                                    <tr key={consulta.id}> 
                                        <td className={styles.linhasTab}>{consulta.id}</td> 
                                        <td className={styles.linhasTab}>{consulta.medico}</td> 
                                        <td className={styles.linhasTab}>{consulta.especialidade}</td> 
                                        <td className={styles.linhasTab}>{consulta.paciente}</td>  
                                        <td className={styles.linhasTab}>{consulta.tipo}</td> 
                                    </tr> 
                                ))} 
                            </tbody> 
                        </table> 
                    </div>
                </div> 
            </div> 
        </body>
    ); 
};