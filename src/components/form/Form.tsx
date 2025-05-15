import React from "react";
import styles from "./form.module.scss";
import InputWrapper from "../inputWrapper/InputWrapper";
import TextAreaWrapper from "../textAreaWrapper/TextAreaWrapper";
import Button from "../button/Button";

export default function Form() {
    return (
        <form className={styles.container}>
            <legend className={styles.legend}>Fale com as galáxias 🪐</legend>
            <hr />
            <InputWrapper id="nome" label="Nome" placeholder="Digite seu nome" required />
            <InputWrapper id="email" label="E-mail" placeholder="Digite seu e-mail" type="email" required />
            <TextAreaWrapper id="mensagem" label="Mensagem" placeholder="Digite sua mensagem" maxLength={120} required />
            <Button id="btnEnviar" text="Enviar"/>
        </form>
    )
}