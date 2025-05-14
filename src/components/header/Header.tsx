import React from "react";
import NavBar from "../navbar/NavBar";
import styles from "./header.module.scss";

export default function Header() {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Universo Star Trek</span>
            <NavBar/>
        </div>
    )
}