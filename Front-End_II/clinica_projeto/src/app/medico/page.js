'use client';
import React, { useEffect, useState } from "react";
import styles from './medico.module.css';
import Header from "@/components/Header";

const urlBanco = "https://api-clinica-2a.onrender.com";

export default function Medicos() {
    const [medicos, setMedicos] = useState([]); 
    const [medicosFiltrados, setMedicosFiltrados] = useState([]); 
    const [mostrarLista, setMostrarLista] = useState(false); 
    const [pesquisa, setPesquisa] = useState("");

    const togglePopup = async () => {
        setMostrarLista((prev) => !prev);
        if (!mostrarLista) {
            await listarMedicos(); 
        }
    };

    async function listarMedicos() {
        try {
            const response = await fetch(`${urlBanco}/medicos`);
            if (!response.ok) throw new Error("Erro ao buscar dados: " + response.statusText);

            const data = await response.json();
            setMedicos(data);
            setMedicosFiltrados(data);
        } catch (error) {
            console.error('Erro ao buscar médicos:', error);
        }
    }

    function pesquisaMudancaMedicos(nome) {
        setPesquisa(nome);

        if (nome.trim() === "") {
            setMedicosFiltrados(medicos);
        } else {
            const filtrados = medicos.filter((medico) =>
                medico.nome.toLowerCase().includes(nome.toLowerCase())
            );
            setMedicosFiltrados(filtrados);
        }
    }

    useEffect(() => {
        listarMedicos();
    }, []);

    return (
        <body>
            <Header/>
            <div className={styles.divMeio}>
                <div className={styles.divPrincipal}>
                    <div className={styles.divTitulo}>
                        <h1 className={styles.title}>Lista de Médicos</h1>
                    </div>

                    <div className={styles.divBotao}>
                        <button onClick={togglePopup} className={styles.searchButton}>
                            Buscar Médico
                        </button>
                    </div>

                    {mostrarLista && (
                        <div className={styles.popUpDiv} onClick={togglePopup}>
                            <div className={styles.popUp} onClick={(e) => e.stopPropagation()}>
                                <button className={styles.fechar} onClick={togglePopup}>Fechar</button>

                                <input
                                    type="text"
                                    className={styles.pesquisaInput}
                                    value={pesquisa}
                                    onChange={(e) => pesquisaMudancaMedicos(e.target.value)}
                                    placeholder="Digite o nome do médico"
                                    onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                                />

                                <div className={styles.medicoList}>
                                    {medicosFiltrados.length > 0 ? (
                                        medicosFiltrados.map((medico) => (
                                            <div key={medico.id} className={styles.medicoItem}>
                                                {medico.nome}
                                            </div>
                                        ))
                                    ) : (
                                        <p className={styles.nenhumEncontrado}>Nenhum médico encontrado.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={styles.divTabela}>
                        <table className={styles.tabMedicos}>
                            <thead className={styles.tabHead}>
                                <tr className={styles.tituloTab}>
                                    <th className={styles.linhasTit}>ID</th>
                                    <th className={styles.linhasTit}>Nome</th>
                                    <th className={styles.linhasTit}>Telefone</th>
                                    <th className={styles.linhasTit}>E-mail</th>
                                    <th className={styles.linhasTit}>Especialidade</th>
                                </tr>
                            </thead>
                            <tbody className={styles.corpoTab}>
                                {medicos.map((medico) => (
                                    <tr key={medico.id}>
                                        <td className={styles.linhasTab}>{medico.id}</td>
                                        <td className={styles.linhasTab}>{medico.nome}</td>
                                        <td className={styles.linhasTab}>{medico.telefone}</td>
                                        <td className={styles.linhasTab}>{medico.email}</td>
                                        <td className={styles.linhasTab}>{medico.especialidade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </body>
    );
}