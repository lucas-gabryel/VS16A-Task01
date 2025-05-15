import React from "react";
import styles from "./galeria.module.scss"
import Image from "next/image";
import Photo1 from "../../../public/image 1.png";
import Photo2 from "../../../public/image 2.png";
import Photo3 from "../../../public/image 3.png";
import Photo4 from "../../../public/image 4.png";
import Photo5 from "../../../public/image 5.png";
import Photo6 from "../../../public/image 6.png";

export default function Galeria() {
    return (
        <div className={styles.container}>
            <Image 
              className={styles.element}
              src = {Photo1} 
              alt = "Imagem de uma galáxia"
              layout = "responsive"
              quality = {90}
              priority = {true}
              placeholder="blur"  
            />
            <Image 
              className={styles.element}
              src = {Photo2} 
              alt = "Imagem de uma galáxia"
              layout = "responsive"
              quality = {90}
              priority = {true}
              placeholder="blur"  
            />
            <Image 
              className={styles.element}
              src = {Photo3} 
              alt = "Imagem de uma galáxia"
              layout = "responsive"
              quality = {90}
              priority = {true}
              placeholder="blur"  
            />
            <Image 
              className={styles.element}
              src = {Photo4} 
              alt = "Imagem de uma galáxia" 
              layout = "responsive"
              quality = {90}
              priority = {true}
              placeholder="blur"  
            />
            <Image 
              className={styles.element}
              src = {Photo5} 
              alt = "Imagem de uma galáxia" 
              layout = "responsive"
              quality = {90}
              priority = {true}
              placeholder="blur"  
            />
            <Image 
              className={styles.element}
              src = {Photo6} 
              alt = "Imagem de uma galáxia" 
              layout = "responsive"
              quality = {90}
              priority = {true}
              placeholder="blur"  
            />
        </div>
    )
}