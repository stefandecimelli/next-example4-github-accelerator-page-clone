import Image from 'next/image'
import styles from "./BackgroundImage.module.css"

const size = 800;
const location = "https://accelerator.github.com/images/invertocat.svg";
const alt = "Invertocat"

export default function BackgroundImage() {
    return (
        <Image src={location} width={size} height={size} alt={alt} className={styles.position} />
    )
}
