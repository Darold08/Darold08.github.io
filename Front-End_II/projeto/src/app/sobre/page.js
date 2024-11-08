import styles from "./sobre.module.css"
const Sobre = () => {
    return(
        <main>
            <h1>Sobre</h1>
            <p className={styles.paragrafo}>Minha segunda página</p>
            <p id={styles.paragrafoUnico}>Meu parágrafo especial</p>

        </main>
    )
}

export default Sobre;