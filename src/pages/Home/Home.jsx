import { Container, Button } from "react-bootstrap";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Container className="text-center">
          <h1 className={styles.title}>
            Vinci premi reali 🎁
          </h1>

          <p className={styles.subtitle}>
            Partecipa ai nostri giveaway e scopri le collaborazioni che aiutano a far crescere pagine e community su Instagram.
          </p>

          <div className={styles.buttons}>
            <a
              href="https://www.instagram.com/mida.lot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={styles.btnMain}>
                Vai su Instagram
              </Button>
            </a>

            <Button variant="outline-dark">
              Scopri come funziona
            </Button>
          </div>
        </Container>
      </section>

      <section className={styles.howItWorks}>
        <Container>
          <h2 className={styles.sectionTitle}>
            Come funziona
          </h2>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h4>Segui la pagina</h4>
              <p>Vai su Instagram e segui il nostro profilo.</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h4>Partecipa al giveaway</h4>
              <p>Segui le istruzioni indicate nei post pubblicati.</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h4>Attendi l’estrazione</h4>
              <p>I vincitori vengono selezionati e verificati in modo trasparente.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}