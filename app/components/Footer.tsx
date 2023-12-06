import Link from "next/link";
import styles from "./Footer.module.css"
import { HOME_LINK } from "../lib/constants";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                ©2023 GitHub Inc.
            </div>
            <div>
                <ul className={styles.footerLinks}>
                    <li>
                        <Link href={HOME_LINK}>Terms</Link>
                    </li>
                    <li>
                        <Link href={HOME_LINK}>Privacy</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
