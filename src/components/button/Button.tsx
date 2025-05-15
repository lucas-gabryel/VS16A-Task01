import React from "react";
import styles from "./button.module.scss";

interface button {
    id: string;
    text: string;
    typeStyle?: "primary" | "secondary"; 
}

export default function Button({ id, text, typeStyle }: button) {
    let bntClass = styles.primary;
    if(typeStyle == "secondary") {
        bntClass = styles.secondary;
    }

    return (
        <button id={id} className={bntClass}>
            {text}
        </button>
    )
}