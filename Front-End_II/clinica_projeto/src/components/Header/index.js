'use client';
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return(
        <header className={style.cabecalho}>
            <Image className={style.logo} src='/imagens/logo.png' alt='Logo da clínica' width={80} height={70} priority></Image>
            {
                <nav className={style.navHeader}>
                    <ul className={style.opcoesHeader}>
                        <li className={style.ops}>
                            <Link className={style.corSecao} href="/">
                                HOME
                            </Link>
                        </li>
                        <li className={`${style.ops} ${style.liMenu}`}>
                            <Link href="#" className={`${style.corSecao} ${style.opcoesMenu}`}>MÉDICOS</Link>
                            <ul className={style.abrirOpsMenu}>
                                <li className={style.liMenu}><Link href="medico" className={style.opcoesMenu}>Listar</Link></li>
                                <li className={style.liMenu}><Link href="#" className={style.opcoesMenu}>Adicionar</Link></li>
                                <li className={style.liMenu}><Link href="#" className={style.opcoesMenu}>Editar</Link></li>
                                <li className={style.liMenu}><Link href="#" className={style.opcoesMenu}>Excluir</Link></li>
                            </ul>
                        </li>

                        <li className={`${style.ops} ${style.liMenu}`}>
                            <Link href="#" className={`${style.corSecao} ${style.opcoesMenu}`}>PACIENTES</Link>
                            <ul className={style.abrirOpsMenu}>
                                <li className={style.liMenu}><Link href="paciente" className={style.opcoesMenu}>Listar</Link></li>
                                <li className={style.liMenu}><Link href="#" className={style.opcoesMenu}>Adicionar</Link></li>
                                <li className={style.liMenu}><Link href="#" className={style.opcoesMenu}>Editar</Link></li>
                                <li className={style.liMenu}><Link href="#" className={style.opcoesMenu}>Excluir</Link></li>
                            </ul>
                        </li>

                        <li className={`${style.ops} ${style.liMenu}`}>
                            <Link href="#" className={`${style.corSecao} ${style.opcoesMenu}`}>AGENDAMENTOS</Link>
                            <ul className={style.abrirOpsMenu}>
                                <li className={style.liMenu}><Link href="consulta" className={style.opcoesMenu}>Listar Consultas</Link></li>
                                <li className={style.liMenu}><Link href="agendar" className={style.opcoesMenu}>Agendar Consulta</Link></li>
                                <li className={style.liMenu}><Link href="#" className={style.opcoesMenu}>Editar Agendamento</Link></li>
                                <li className={style.liMenu}><Link href="#" >Cancelar Agendamento</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
};