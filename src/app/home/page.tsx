import React from "react";
import styles from "./start.module.scss";
import Galeria from "../../components/galeria/Galeria";
import Photo1 from "../../../public/image 1.png";
import Photo2 from "../../../public/image 2.png";

export default function Start() {
    return (
        <div className={styles.container}>
            <h1>Olá, Universo! 🖖🏽</h1>
            <Galeria imagens={[`${Photo2}`, `${Photo1}`]}/>
        </div>
    )
}