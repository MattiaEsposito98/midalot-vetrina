import { Container, Button } from "react-bootstrap";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Servizi.module.css";

export default function Servizi() {
  const { t } = useLanguage();

  return (
    <section className={styles.servicesPage}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t("servicesEyebrow")}</p>
          <h1 className={styles.title}>{t("servicesTitle")}</h1>
          <p className={styles.subtitle}>{t("servicesSubtitle")}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.badge}>{t("siteBadge")}</div>
            <h2 className={styles.cardTitle}>{t("siteTitle")}</h2>
            <p className={styles.cardText}>{t("siteText1")}</p>
            <p className={styles.cardText}>{t("siteText2")}</p>

            <a
              href="https://www.instagram.com/mida.lot/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWrap}
            >
              <Button className={styles.primaryBtn}>
                {t("siteBtn")}
              </Button>
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>{t("followerBadge")}</div>
            <h2 className={styles.cardTitle}>{t("followerTitle")}</h2>
            <p className={styles.cardText}>{t("followerText1")}</p>
            <p className={styles.cardText}>{t("followerText2")}</p>

            <a
              href="https://www.instagram.com/mida.lot/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWrap}
            >
              <Button variant="outline-dark" className={styles.secondaryBtn}>
                {t("followerBtn")}
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}