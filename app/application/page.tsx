import Link from "next/link";

export default function page() {
    return (
        <main>
            <section className="center-main-section">
                <div className={"main-section"}>
                    <div className={'main-section-text'}>
                        <h1 className="big">Don&apos;t Stay Tuned</h1>
                        <br />
                        <p>This is not a real page and it won&apos;t change. </p>
                        <p>Applications for the second cohort will open in early 2024. We look forward to seeing you back here for future cohort applications! Sign up here for more updates.</p>
                        <Link href={"/"}>
                            <button>Back to home</button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
