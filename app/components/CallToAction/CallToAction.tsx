import { APPPLICATION_LINK } from "@/app/lib/constants"
import styles from "./CallToAction.module.css"
import Link from "next/link"

export default function CallToAction() {
  return (
    <div className={styles.wrapper}>
      <h2 className="pretty-header big-header">GitHub Accelerator</h2>
      <div className={styles.applyNowButtonWrapper}>
        <Link href={APPPLICATION_LINK}>
          <button>Apply now</button>
        </Link>
      </div>
    </div>
  )
}
