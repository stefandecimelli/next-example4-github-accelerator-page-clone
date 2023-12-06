import styles from "./ProgramContent.module.css"

export default function ProgramContent() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Program</h2>
      </div>
      <div className={styles.programSections}>

        <div className={styles.programSection}>
          <h4 className={"pretty-header"}>Pioneering new ways to work in open source</h4>
        </div>

        <div className={styles.programSection}>
          <p>Our first class of fellows participated in a 10-week accelerator program, received $20,000 in sponsorship as well as mentorship from open source leaders and enterprise partners on how to grow their projects and build durable streams of funding.</p>
        </div>

        <div className={styles.programSection}>
          <Icon d="M11.746 6.52A1.5 1.5 0 0 1 12.88 6H35.5a1.5 1.5 0 0 1 1.152.54l10 12a1.5 1.5 0 0 1-.056 1.984l-21.5 23a1.5 1.5 0 0 1-2.192 0l-21.5-23a1.5 1.5 0 0 1-.04-2.006l10.38-12 .002.002ZM13.566 9l-9.05 10.46L24 40.306l19.5-20.86L34.798 9H13.566Z" />
          <h3>Sponsorship</h3>
          <p>GitHub will provide funding for your project for the duration of the accelerator.</p>
        </div>

        <div className={styles.programSection}>
          <Icon d="M25 2.5a1.5 1.5 0 0 0-3 0v17.379l-9.107-9.107a1.5 1.5 0 1 0-2.12 2.121L19.878 22H2.5a1.5 1.5 0 0 0 0 3h17.379l-9.107 9.107a1.5 1.5 0 1 0 2.121 2.12L22 27.122V44.5a1.5 1.5 0 0 0 3 0V27.121l9.107 9.107a1.5 1.5 0 1 0 2.12-2.121L27.122 25H44.5a1.5 1.5 0 0 0 0-3H27.121l9.107-9.107a1.5 1.5 0 0 0-2.121-2.12L25 19.878V2.5Z" />
          <h3>Mentorship</h3>
          <p>Open source experts will discuss how to build successful projects with topics ranging from Licensing, to working with enterprise sponsors, to raising capital.</p>
        </div>

        <div className={styles.programSection}>
          <Icon d="M6.5 8a.5.5 0 0 0-.5.5v25a.5.5 0 0 0 .5.5h5a1.5 1.5 0 0 1 1.5 1.5v6.379l7.44-7.44A1.5 1.5 0 0 1 21.5 34h20a.5.5 0 0 0 .5-.5v-25a.5.5 0 0 0-.5-.5h-35ZM3 8.5A3.5 3.5 0 0 1 6.5 5h35A3.5 3.5 0 0 1 45 8.5v25a3.5 3.5 0 0 1-3.5 3.5H22.121l-7.146 7.146A2.914 2.914 0 0 1 10 42.086V37H6.5A3.5 3.5 0 0 1 3 33.5v-25Z" />
          <h3>Support</h3>
          <p>Dedicated product support and guidance during the course of the program.</p>
        </div>

        <div className={styles.programSection}>
          <Icon d="M24 .5a1.5 1.5 0 0 1 1.345.836l6.117 12.394 13.677 1.987a1.5 1.5 0 0 1 .831 2.559l-9.897 9.647 2.337 13.622a1.5 1.5 0 0 1-2.177 1.581L24 36.695l-12.233 6.431a1.5 1.5 0 0 1-2.177-1.581l2.337-13.622-9.897-9.647a1.5 1.5 0 0 1 .831-2.559l13.677-1.987 6.117-12.394A1.5 1.5 0 0 1 24 .5Zm0 4.89-5.12 10.375a1.5 1.5 0 0 1-1.13.82L6.3 18.25l8.285 8.076a1.5 1.5 0 0 1 .432 1.328L13.06 39.056l10.24-5.384a1.5 1.5 0 0 1 1.397 0l10.241 5.384-1.956-11.403a1.5 1.5 0 0 1 .431-1.328L41.7 18.25l-11.45-1.664a1.5 1.5 0 0 1-1.13-.82L24 5.389Z" />
          <h3>Eligibility</h3>
          <p>Anyone who is a current maintainer of an open source project on GitHub. Applications will open in early 2024.</p>
        </div>

      </div>
    </div>
  )
}
function Icon({ d }: { d: string }) {
  return (
    <svg className={styles.icon} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d={d} fill="url(#a)"></path>
      <defs>
        <linearGradient id="a" x1="3.67" y1="-16.074" x2="38.909" y2="-13.989" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F778BA">
          </stop>
          <stop offset="1" stop-color="#79C0FF">
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

