'use client';
import { useEffect, useState } from 'react';
import styles from './medicos.module.css';

export default function Medicos() {
    const [exibirDropdown, setExibirDropDown] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [medicos, setMedicos] = useState([
        { idmedico: 1, nome: "Dra. Lívia Darold", telefone: "(11)99999-0001", email: "liviaadarold@gmail.com", especialidade: "Clínica Geral" },
        { idmedico: 2, nome: "Dra. Mariana Zorzi", telefone: "(11)98888-0002", email: "m.zorzi@gmail.com", especialidade: "Cardiologia" },
        { idmedico: 3, nome: "Dr. João Corso", telefone: "(11)97777-0003", email: "joao@corso.com", especialidade: "Psiquiatria" },
        { idmedico: 4, nome: "Dra. Lavínia Stein", telefone: "(11)96666-0004", email: "sofia@patricia.com", especialidade: "Dermatologista" },
        { idmedico: 5, nome: "Dr. Luiz Henrique", telefone: "(11)95555-0005", email: "luiz@henrique.com", especialidade: "Neurologista" },
        { idmedico: 6, nome: "Dra. Beatriz Cristina", telefone: "(11)94444-0006", email: "beatriz@cristina.com", especialidade: "Psiquiatria" },
        { idmedico: 7, nome: "Dr. Marcelo Alves", telefone: "(11)93333-0007", email: "marcelo@alves.com", especialidade: "Ortopedia" },
        { idmedico: 8, nome: "Dra. Laura Fernanda", telefone: "(11)92222-0008", email: "laura@fernanda.com", especialidade: "Oncologia" },
        { idmedico: 9, nome: "Dr. Felipe Oliveira", telefone: "(11)91111-0009", email: "felipe@oliveira.com", especialidade: "Urologia" },
        { idmedico: 10, nome: "Dra. Gabriela Souza", telefone: "(11)90000-0010", email: "gabriela@souza.com", especialidade: "Oftalmologia" }
        ]);
}