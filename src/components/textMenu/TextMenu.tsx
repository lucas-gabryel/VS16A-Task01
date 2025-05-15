import React, { Children } from "react";
import Link, { LinkProps } from "next/link" 
import styles from "./textMenu.module.scss";

interface Link extends LinkProps {
    texto: string;
    href: string;
    icon?: React.ReactNode;
}

export default function TextMenu({ texto, href, icon, ...rest }: Link) {
    return (
        <Link href={href} className={styles.link} {...rest}>
            {texto && <span>{texto}</span>}
        </Link>
    )
}