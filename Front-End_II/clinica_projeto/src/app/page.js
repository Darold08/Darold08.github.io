import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/components/Header";

export default function Home() {
  const nome = 'Lívia Darold'
  return (
    <body className={styles.corpo}>
      <Header/>
      <div className={styles.divPrincipal}>
        <div className={styles.divHome}>
          <h1 className={styles.titulo}>Bem-Vindo à Clínica Darold!</h1>
          <div className={styles.divParag}>
          <p className={styles.parag}>Nossa equipe de profissionais altamente capacitados está pronta para garantir o seu bem-estar em cada etapa do cuidado.</p>
          <p className={styles.parag}>Conte com a gente para uma experiência de saúde acolhedora, eficiente e focada em suas necessidades. É um prazer tê-lo conosco!</p>
            <button className={styles.agendarBt}><Link href="agendar" className={styles.opcoesMenu}>Agendar Consulta</Link></button>
          </div>
        </div>
      </div>
      
  </body>
);
}