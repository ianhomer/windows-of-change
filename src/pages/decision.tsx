import Layout from "../components/layout";
import styles from "../styles/Layout.module.scss";

export default function Page() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <ul>
            <li>
              <a href="https://dictionary.cambridge.org/dictionary/english/decision">
                Decision
              </a>{" "}
              a choice that you make about something after thinking about
              several possibilities.
            </li>
            <li>
              <a href="https://www.etymonline.com/word/decision">To cut off</a>{" "}
              from <em>de</em> "off" (<strong>de-</strong>) + <em>caedere</em>{" "}
              "to cut" (from PIE root <strong>*kae-id-</strong> "to strike"). "a
              resolution, a fixing of purpose" (1886).
            </li>
            <li>
              <a href="https://membean.com/wrotds/cis-cut#:~:text=The%20root%20word%20cis%20and,'killed'%20all%20other%20options.">
                Chop-chop, Cut-cut
              </a>
              . The root word <strong>cis</strong> and its variants{" "}
              <strong>cid</strong> and <strong>-cide</strong> come from a Latin
              root which means ‘cut’. A decision, for instance, is a ‘cutting
              off’ of all possibilities except for one; if you are decisive you
              have ‘killed’ all other options.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
