import Link from "next/link"
import styles from "./header.module.css"
export default function Header() {
    return(
        <header>
            <nav>
                <ul>
                <li><Link href='/'>Home</Link> </li>
                    <li><Link href='/sobre'>Sobre</Link> </li>
                    <li><Link href='/contato'>Contato</Link> </li>
                </ul>
            </nav>
        </header>
    )
}