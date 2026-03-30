import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className={styles.homePage}>
      <Container>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>{t("heroEyebrow")}</p>

            <h1 className={styles.title}>
              {t("heroTitle")}
              <FontAwesomeIcon icon={faArrowTrendUp} />
            </h1>

            <p className={styles.subtitle}>{t("heroSubtitle")}</p>

            <div className={styles.buttons}>
              <a
                href="https://www.instagram.com/mida.lot/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkWrap}
              >
                <Button className={styles.btnMain}>
                  {t("heroInstagram")}
                </Button>
              </a>

              <Link to="/servizi" className={styles.linkWrap}>
                <Button variant="outline-dark" className={styles.btnSecondary}>
                  {t("heroServices")}
                </Button>
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualBadge}>mida.lot</div>
              <h3 className={styles.visualTitle}>{t("homeVisualTitle")}</h3>
              <p className={styles.visualText}>{t("homeVisualText")}</p>

              <div className={styles.visualStats}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>{t("homeStat1Label")}</span>
                  <strong>{t("homeStat1Value")}</strong>
                </div>

                <div className={styles.statItem}>
                  <span className={styles.statLabel}>{t("homeStat2Label")}</span>
                  <strong>{t("homeStat2Value")}</strong>
                </div>

                <div className={styles.statItem}>
                  <span className={styles.statLabel}>{t("homeStat3Label")}</span>
                  <strong>{t("homeStat3Value")}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.highlights}>
          <div className={styles.highlightCard}>
            <h4>{t("highlight1Title")}</h4>
            <p>{t("highlight1Text")}</p>
          </div>

          <div className={styles.highlightCard}>
            <h4>{t("highlight2Title")}</h4>
            <p>{t("highlight2Text")}</p>
          </div>

          <div className={styles.highlightCard}>
            <h4>{t("highlight3Title")}</h4>
            <p>{t("highlight3Text")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}