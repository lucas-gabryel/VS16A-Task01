import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/">Home</Link></li>
                <li className={styles.li}><Link href="/filmes">Séries e Filmes</Link></li>
                <li className={styles.li}><Link href="/personagens">Personagens</Link></li>
            </ul>
        </nav>
    )
}