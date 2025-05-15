import React from "react";
import styles from "./textareaWrapper.module.scss"

interface textarea {
    id: string;
    label: string;
    placeholder: string;
    maxLength: number;
    required?: boolean;
}

export default function TextAreaWrapper({ id, label, maxLength, placeholder, required }: textarea) {
    return (
        <div className={styles.textAreaWrapper}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <textarea id={id} maxLength={maxLength} placeholder={placeholder} className={styles.textarea} required={required}></textarea>
        </div>
    )
}