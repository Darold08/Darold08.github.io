// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Lívia'
  return (
    <div>
      <h1>Página principal</h1>
      <p>Parágrafo da página principal</p>
      <p>Autora: {nome}</p>
    </div>
  );
}
