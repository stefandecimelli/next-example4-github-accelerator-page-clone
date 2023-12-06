import BackgroundImage from "../BackgroundImage";
import styles from "./LandingContent.module.css";

export function LandingContent() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperText}>
                <h1>GitHub Accelerator</h1>
                <h2 className={"big"}>Jumpstarting new careers in open source</h2>
                <p>The world runs on open source. None of it would be possible without the global team of contributors who freely devote their time and energy to pushing our shared digital infrastructure forward.</p>
                <p>Open source developers often balance enterprise jobs by day and community work by night. For many, this isn't sustainable - especially in places where unpaid work isn't possible. Going full-time means navigating a maze of sponsorships and grants, licensing gray zones, and starting companies, with a rare few developing into durable businesses. Our open source community needs more examples and better guides on how to take the leap into full-time work. </p>
                <p>With the GitHub Accelerator, we want to pioneer new ways for developers to simply and sustainably work in open source full-time – built on developer's terms. </p>
            </div>
            <BackgroundImage />
        </div>
    )
}
