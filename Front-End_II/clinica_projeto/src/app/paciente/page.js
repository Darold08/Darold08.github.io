'use client'; 
import React, { useEffect, useState } from "react"; 
import styles from './paciente.module.css'; 
import Header from "@/components/Header";

const urlBanco = "https://api-clinica-2a.onrender.com"; 

export default function Pacientes() { 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [showPopup, setShowPopup] = useState(false); 
    const [pacientes, setPacientes] = useState([]); 
    const [pacientesFiltrados, setPacientesFiltrados] = useState([]); 

    const togglePopup = async () => { 
        setShowPopup(prevState => !prevState);
        if (!showPopup) {
            await listarPacientes(); 
        }
    };

    async function listarPacientes() {
        try {
            const response = await fetch(`${urlBanco}/pacientes`);
            if (!response.ok) throw new Error("Erro ao buscar dados: " + response.statusText);

            const data = await response.json();
            setPacientes(data); 
            setPacientesFiltrados(data); 
        } catch (error) {
            console.error('Erro ao buscar pacientes:', error);
        }
    }

    function pesquisaMudanca(event) {
        const nome = event.target.value;
        setSearchTerm(nome);

        if (nome.trim() === "") {
            setPacientesFiltrados(pacientes);
        } else {
            const filtrados = pacientes.filter((paciente) =>
                paciente.nome.toLowerCase().includes(nome.toLowerCase())
            );
            setPacientesFiltrados(filtrados); 
        }
    }

    useEffect(() => {
        listarPacientes();
    }, []);

    return ( 
        <body>
            <Header/>
            <div className={styles.divMeio}> 
                <div className={styles.divPrincipal}> 
                    <div className={styles.divTitulo}> 
                        <h1 className={styles.title}>Lista de Pacientes</h1> 
                    </div> 
                    <div className={styles.divBotao}> 
                        <button onClick={togglePopup} className={styles.searchButton}>Buscar Paciente</button> 
                    </div> 

                    {showPopup && ( 
                        <div className={styles.popUpDiv} onClick={togglePopup}> 
                            <div className={styles.popUp} onClick={(e) => e.stopPropagation()}> 
                                <button className={styles.fechar} onClick={togglePopup}>Fechar</button> 
                                <input 
                                    type="text" 
                                    className={styles.pesquisaInput} 
                                    value={searchTerm} 
                                    onChange={pesquisaMudanca} 
                                    placeholder="Digite o nome do paciente" 
                                    onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                                /> 
                                <div className={styles.pacienteList}> 
                                    {pacientesFiltrados.length > 0 ? (
                                        pacientesFiltrados.map((paciente) => ( 
                                            <div key={paciente.id} className={styles.pacienteItem}> 
                                                {paciente.nome} 
                                            </div> 
                                        ))
                                    ) : (
                                        <p className={styles.nenhumEncontrado}>Nenhum paciente encontrado.</p>
                                    )}
                                </div> 
                            </div> 
                        </div> 
                    )} 

                    <div className={styles.divTabela}>
                        <table className={styles.tabPacientes}> 
                            <thead className={styles.tabHead}> 
                                <tr className={styles.tituloTab}> 
                                    <th className={styles.linhasTit}>ID</th> 
                                    <th className={styles.linhasTit}>Nome</th> 
                                    <th className={styles.linhasTit}>Telefone</th> 
                                    <th className={styles.linhasTit}>E-mail</th> 
                                    <th className={styles.linhasTit}>CPF</th> 
                                </tr> 
                            </thead> 
                            <tbody className={styles.corpoTab}> 
                                {pacientes.map((paciente) => ( 
                                    <tr key={paciente.id}> 
                                        <td className={styles.linhasTab}>{paciente.id}</td> 
                                        <td className={styles.linhasTab}>{paciente.nome}</td> 
                                        <td className={styles.linhasTab}>{paciente.telefone}</td> 
                                        <td className={styles.linhasTab}>{paciente.email}</td> 
                                        <td className={styles.linhasTab}>{paciente.cpf}</td> 
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