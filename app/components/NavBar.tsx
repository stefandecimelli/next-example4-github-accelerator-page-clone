import Link from "next/link"
import styles from "./NavBar.module.css";
import { APPPLICATION_LINK, HOME_LINK, LOGO_SVG } from "../lib/constants";

export default function NavBar() {
    return (
        <header className={styles.header}>
            <div>
                <Link href={HOME_LINK}>
                    <nav className={styles.nav}>
                        <ol>
                            <li>{_logo()}</li>
                            <li className={styles.navItemsDivider}>{HOME_LINK}</li>
                            <li>Accelerator</li>
                        </ol>
                    </nav>
                </Link>
                <div className={styles.applyNowButtonWrapper}>
                    <Link href={APPPLICATION_LINK}>
                        <button>Apply now</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

function _logo() {
    return (
        <svg
            aria-hidden="true"
            role="img"
            viewBox="0 0 16 16"
            width="32"
            height="32"
            fill="currentColor"
        >
            <path fillRule="evenodd" d={LOGO_SVG} />
        </svg>
    )
}