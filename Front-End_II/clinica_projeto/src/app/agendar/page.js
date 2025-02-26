'use client';
import { useState } from 'react';
import styles from './agendar.module.css';
import Header from '@/components/Header';

export default function Agendar() {
    const [selectedPaciente, setSelectedPaciente] = useState('');
    const [selectedMedico, setSelectedMedico] = useState('');
    const [selectedData, setSelectedData] = useState('');
    const [selectedHorario, setSelectedHorario] = useState('');
    const [showPopup, setShowPopup] = useState(false); // Controle do pop-up

    const pacientes = [
        { id: 1, nome: "Carlos Silva" },
        { id: 2, nome: "Mariana Costa" },
        { id: 3, nome: "José Almeida" },
        { id: 4, nome: "Fernanda Lima" },
        { id: 5, nome: "Roberto Nogueira" },
        { id: 6, nome: "Juliana Mendes" },
        { id: 7, nome: "Ricardo Souza" },
        { id: 8, nome: "Ana Beatriz" },
        { id: 9, nome: "Thiago Ramos" },
        { id: 10, nome: "Patrícia Martins" }
    ];

    const medicos = [
        { idMedico: 1, nome: "Dr. João Silva", especialidade: "Cardiologia" },
        { idMedico: 2, nome: "Dra. Maria Oliveira", especialidade: "Dermatologia" },
        { idMedico: 3, nome: "Dr. Pedro Santos", especialidade: "Ortopedia" },
        { idMedico: 4, nome: "Dra. Ana Souza", especialidade: "Pediatria" },
        { idMedico: 5, nome: "Dr. Luís Costa", especialidade: "Neurologia" },
        { idMedico: 6, nome: "Dra. Carla Mendes", especialidade: "Ginecologia" },
        { idMedico: 7, nome: "Dr. Roberto Lima", especialidade: "Oftalmologia" },
        { idMedico: 8, nome: "Dra. Fernanda Rocha", especialidade: "Psiquiatria" },
        { idMedico: 9, nome: "Dr. Eduardo Ramos", especialidade: "Endocrinologia" },
        { idMedico: 10, nome: "Dra. Juliana Pereira", especialidade: "Reumatologia" },
        { idMedico: 11, nome: "Dr. Marcelo Alves", especialidade: "Urologia" },
        { idMedico: 12, nome: "Dra. Bianca Martins", especialidade: "Oncologia" }
    ];

    const horas = [
        "07:00", "08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
    ];

    const medicoSelecionado = medicos.find((medico) => medico.nome === selectedMedico);

    // Verifica se todos os campos foram preenchidos
    const camposPreenchidos = selectedPaciente && selectedMedico && selectedData && selectedHorario;

    // Função para mostrar o pop-up
    const abrirPopUp = () => {
        if (camposPreenchidos) {
            setShowPopup(true);
        }
    };

    // Função para fechar o pop-up
    const fecharPopUp = () => {
        setShowPopup(false);
    };

    return (
        <body>
            <Header/>
            <div className={styles.divMeio}>
                <div className={styles.divPrincipal}>
                    <h2 className={styles.title}>Agendar Consulta</h2>
                    <div className={styles.selectContainer}>
                        <div className={styles.selectDiv}>
                            <label htmlFor="paciente" className={styles.label}>Escolha o paciente:</label>
                            <select
                                id="paciente"
                                value={selectedPaciente}
                                onChange={(e) => setSelectedPaciente(e.target.value)}
                                className={styles.select}
                            >
                                <option value="">Selecione um paciente</option>
                                {pacientes.map((paciente) => (
                                    <option key={paciente.id} value={paciente.nome}>
                                        {paciente.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.selectDiv}>
                            <label htmlFor="medico" className={styles.label}>Escolha o médico:</label>
                            <select
                                id="medico"
                                value={selectedMedico}
                                onChange={(e) => setSelectedMedico(e.target.value)}
                                className={styles.select}
                            >
                                <option value="">Selecione um médico</option>
                                {medicos.map((medico) => (
                                    <option key={medico.idMedico} value={medico.nome}>
                                        {medico.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
            
                        {/* Exibe a div com a especialidade se um médico for selecionado */}
                        {selectedMedico && (
                            <div className={styles.divEspe}>
                                <label htmlFor="especialidade" className={styles.label}>Especialidade:</label>
                                <p className={styles.textoEspe}>
                                    {medicoSelecionado ? medicoSelecionado.especialidade : 'Escolha um médico'}
                                </p>
                            </div>
                        )}
                        <div className={styles.selectDiv}>
                            <label htmlFor="data" className={styles.label}>Data:</label>
                            <input
                                type="date"
                                id="data"
                                value={selectedData}
                                onChange={(e) => setSelectedData(e.target.value)}
                                className={styles.select}
                            />
                        </div>
                        <div className={styles.selectDiv}>
                            <label htmlFor="horario" className={styles.label}>Horário:</label>
                            <select
                                id="horario"
                                value={selectedHorario}
                                onChange={(e) => setSelectedHorario(e.target.value)}
                                className={styles.select}
                            >
                                <option value="">Selecione um horário</option>
                                {horas.map((hora, index) => (
                                    <option key={index} value={hora}>
                                        {hora}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* Botão Agendar */}
                    <button
                        onClick={abrirPopUp}
                        disabled={!camposPreenchidos}
                        className={styles.agendarBt}>
                        Agendar
                    </button>
                </div>
                {/* Pop-up de confirmação*/}
                {showPopup && (
                    <div className={styles.popupSombra} onClick={fecharPopUp}>
                        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                            <h3 className={styles.popUpTitulo}>Consulta Agendada</h3>
                            <p><strong>Paciente:</strong> {selectedPaciente}</p>
                            <p><strong>Médico:</strong> {selectedMedico}</p>
                            <p><strong>Especialidade:</strong> {medicoSelecionado?.especialidade}</p>
                            <p><strong>Data:</strong> {selectedData}</p>
                            <p><strong>Horário:</strong> {selectedHorario}</p>
                            <button onClick={fecharPopUp} className={styles.fecharBt}>Fechar</button>
                        </div>
                    </div>
                )}
            </div>
        </body>
    );
}