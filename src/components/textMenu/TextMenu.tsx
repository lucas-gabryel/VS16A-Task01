import Link, { LinkProps } from "next/link" 
import styles from "./textMenu.module.scss";

interface Link extends LinkProps {
    texto: string;
    href: string;
}

export default function TextMenu({ texto, href, ...rest }: Link) {
    return (
        <Link href={href} className={styles.link} {...rest}>
            {texto && <span>{texto}</span>}
        </Link>
    )
}