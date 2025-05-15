import React from "react";
import styles from "./inputWrapper.module.scss";

interface input {
    id: string;
    label: string;
    placeholder: string;
    type?: string;
    required?: boolean;
}

export default function InputWrapper({id, label, placeholder, type, required}: input) {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input type={ !type ? "text" : type } id={id} placeholder={placeholder} className={styles.input} required={required} />
        </div>
    )
}