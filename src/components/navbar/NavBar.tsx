import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import TextMenu from "../textMenu/TextMenu";

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.ul}>
                <TextMenu href="/" texto="Home"/>
                <TextMenu href="/filmes" texto="Séries e Filmes"/>
                <TextMenu href="/personagens" texto="Personagens"/>
                <TextMenu href="/galeria" texto="Galeria"/>
                <TextMenu href="/contato" texto="Contato"/>
            </ul>
        </nav>
    )
}