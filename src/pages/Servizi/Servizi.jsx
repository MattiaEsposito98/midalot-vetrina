import { Container, Button } from "react-bootstrap";
import styles from "./Servizi.module.css";

export default function Servizi() {
  return (
    <section className={styles.servicesPage}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>I nostri servizi</h1>
          <p className={styles.subtitle}>
            Offriamo servizi utili per chi vuole crescere online, migliorare la propria presenza digitale
            e gestire meglio il proprio profilo Instagram.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.badge}>Siti vetrina</div>
            <h2 className={styles.cardTitle}>Realizzazione siti vetrina</h2>
            <p className={styles.cardText}>
              Realizziamo siti vetrina moderni, semplici e professionali a un ottimo prezzo.
              Se hai un’attività, un progetto o un brand personale, possiamo aiutarti a creare
              una presenza online chiara, elegante e adatta alla tua immagine.
            </p>
            <p className={styles.cardText}>
              Contattaci per richiedere un preventivo personalizzato in base alle tue esigenze.
            </p>

            <a
              href="https://www.instagram.com/mida.lot/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWrap}
            >
              <Button className={styles.primaryBtn}>
                Richiedi un preventivo
              </Button>
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>Instagram</div>
            <h2 className={styles.cardTitle}>Analisi follower</h2>
            <p className={styles.cardText}>
              Vuoi sapere quali account segui ma non ti seguono?
              Possiamo aiutarti a ottenere una lista chiara dei profili che non ricambiano il follow,
              così da avere una panoramica più ordinata del tuo account.
            </p>
            <p className={styles.cardText}>
              È un servizio pensato per chi vuole controllare meglio il proprio profilo Instagram
              e capire più facilmente le proprie connessioni.
            </p>

            <a
              href="https://www.instagram.com/mida.lot/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWrap}
            >
              <Button variant="outline-dark">
                Contattaci per saperne di più
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}