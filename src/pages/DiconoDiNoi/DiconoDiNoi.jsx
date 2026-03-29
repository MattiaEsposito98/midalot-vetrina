import { useMemo, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { useLanguage } from "../../hooks/useLanguage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./DiconoDiNoi.module.css";

import "swiper/css";
import "swiper/css/navigation";

const testimonialModules = import.meta.glob("../../assets/testimonials/*.png", {
  eager: true,
  import: "default",
});

const collabModules = import.meta.glob("../../assets/collabs/*.png", {
  eager: true,
  import: "default",
});

function mapImages(modules) {
  return Object.entries(modules)
    .map(([path, src]) => {
      const fileName = path.split("/").pop()?.replace(".png", "") || "image";
      return {
        src,
        alt: fileName.replace(/[-_]/g, " "),
      };
    })
    .sort((a, b) => a.alt.localeCompare(b.alt));
}

export default function DiconoDiNoi() {
  const { t } = useLanguage();
  const testimonials = useMemo(() => mapImages(testimonialModules), []);
  const collabs = useMemo(() => mapImages(collabModules), []);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t("socialProofEyebrow")}</p>
          <h1 className={styles.title}>{t("socialProofTitle")}</h1>
          <p className={styles.subtitle}>{t("socialProofSubtitle")}</p>

          <div className={styles.anchorActions}>
            <a href="#testimonials" className={styles.anchorBtn}>
              {t("testimonialsBadge")}
            </a>
            <a href="#collabs" className={styles.anchorBtnSecondary}>
              {t("collabsBadge")}
            </a>
          </div>
        </div>

        <div id="testimonials" className={styles.sectionCard}>
          <div className={styles.sectionTop}>
            <div className={styles.badge}>{t("testimonialsBadge")}</div>
            <h2 className={styles.sectionTitle}>{t("testimonialsTitle")}</h2>
            <p className={styles.sectionText}>{t("testimonialsText")}</p>
          </div>

          {testimonials.length > 0 ? (
            <div className={styles.sliderWrap}>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={testimonials.length > 3}
                spaceBetween={18}
                slidesPerView={1}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
                className={styles.swiper}
              >
                {testimonials.map((image, index) => (
                  <SwiperSlide key={`${image.alt}-${index}`}>
                    <button
                      type="button"
                      className={styles.imageCard}
                      onClick={() => setSelectedImage(image)}
                      aria-label={`${t("openImage")} ${index + 1}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={styles.image}
                        loading="lazy"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>{t("testimonialsEmpty")}</p>
            </div>
          )}
        </div>

        <div id="collabs" className={styles.sectionCard}>
          <div className={styles.sectionTop}>
            <div className={styles.badge}>{t("collabsBadge")}</div>
            <h2 className={styles.sectionTitle}>{t("collabsTitle")}</h2>
            <p className={styles.sectionText}>{t("collabsText")}</p>
          </div>

          {collabs.length > 0 ? (
            <div className={styles.sliderWrap}>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                  delay: 3800,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={collabs.length > 3}
                spaceBetween={18}
                slidesPerView={1}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
                className={styles.swiper}
              >
                {collabs.map((image, index) => (
                  <SwiperSlide key={`${image.alt}-${index}`}>
                    <button
                      type="button"
                      className={styles.imageCard}
                      onClick={() => setSelectedImage(image)}
                      aria-label={`${t("openImage")} ${index + 1}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={styles.image}
                        loading="lazy"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>{t("collabsEmpty")}</p>
            </div>
          )}
        </div>
      </Container>

      <Modal
        show={!!selectedImage}
        onHide={() => setSelectedImage(null)}
        centered
        size="lg"
        contentClassName={styles.modalContent}
      >
        <Modal.Header closeButton className={styles.modalHeader} />
        <Modal.Body className={styles.modalBody}>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.modalImage}
            />
          )}
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button
            className={styles.closeBtn}
            onClick={() => setSelectedImage(null)}
          >
            {t("close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}