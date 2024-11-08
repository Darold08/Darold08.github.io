// import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'Lívia'
  return (
    <div>
      <h1>Página principal</h1>
      <p>Parágrafo da página principal</p>
      <p>Autora: {nome}</p>
      <Image className={styles.imagem} src="/images/imagem.jpg" alt="Monalisa" width={600} height={400}/>
    </div>
  );
}
