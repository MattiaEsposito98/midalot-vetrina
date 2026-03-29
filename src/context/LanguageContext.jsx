import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const translations = {
  it: {
    navHome: "Home2",
    navServices: "Servizi Digitali",
    heroEyebrow: "Giveaway • Collaborazioni • Servizi digitali",
    heroTitle: "Facciamo crescere pagine, community e progetti online",
    heroSubtitle:
      "Organizziamo giveaway reali, collaborazioni Instagram e servizi digitali pensati per chi vuole più visibilità online. Scopri il nostro profilo Instagram oppure dai un’occhiata ai servizi che offriamo.",
    heroInstagram: "Vai su Instagram",
    heroServices: "Scopri i servizi digitali",

    homeVisualTitle: "Giveaway reali e collaborazioni",
    homeVisualText:
      "Un punto di riferimento per chi cerca premi, visibilità e nuove opportunità su Instagram.",
    homeStat1Label: "Focus",
    homeStat1Value: "Giveaway",
    homeStat2Label: "Obiettivo",
    homeStat2Value: "Crescita",
    homeStat3Label: "Servizi",
    homeStat3Value: "Digitali",

    highlight1Title: "Giveaway reali",
    highlight1Text:
      "Organizziamo giveaway con premi concreti e partecipazione semplice.",
    highlight2Title: "Collaborazioni",
    highlight2Text:
      "Aiutiamo pagine e progetti a ottenere più visibilità e coinvolgimento.",
    highlight3Title: "Servizi utili",
    highlight3Text:
      "Realizziamo siti vetrina e strumenti pensati per creator e profili Instagram.",

    servicesEyebrow: "Servizi digitali",
    servicesTitle: "I nostri servizi",
    servicesSubtitle:
      "Offriamo servizi utili per chi vuole crescere online, migliorare la propria presenza digitale e gestire meglio il proprio profilo Instagram.",

    siteBadge: "Siti vetrina",
    siteTitle: "Realizzazione siti vetrina",
    siteText1:
      "Realizziamo siti vetrina moderni, semplici e professionali a un ottimo prezzo. Se hai un’attività, un progetto o un brand personale, possiamo aiutarti a creare una presenza online chiara, elegante e adatta alla tua immagine.",
    siteText2:
      "Contattaci per richiedere un preventivo personalizzato in base alle tue esigenze.",
    siteBtn: "Richiedi un preventivo",

    followerBadge: "Instagram",
    followerTitle: "Analisi follower",
    followerText1:
      "Vuoi sapere quali account segui ma non ti seguono? Possiamo aiutarti a ottenere una lista chiara dei profili che non ricambiano il follow, così da avere una panoramica più ordinata del tuo account.",
    followerText2:
      "È un servizio pensato per chi vuole controllare meglio il proprio profilo Instagram e capire più facilmente le proprie connessioni.",
    followerBtn: "Contattaci per saperne di più",

    navSocialProof: "Dicono di noi",

    socialProofEyebrow: "Community • Feedback • Collaborazioni",
    socialProofTitle: "Dicono di noi",
    socialProofSubtitle:
      "Una raccolta di testimonianze e collaborazioni che raccontano meglio il nostro percorso, il rapporto con la community e le esperienze condivise nel tempo.",

    testimonialsBadge: "Testimonianze",
    testimonialsTitle: "Messaggi, feedback e ringraziamenti",
    testimonialsText:
      "Qui raccogliamo alcuni screenshot ricevuti dalla nostra community: parole semplici, riscontri reali e messaggi che per noi hanno valore.",
    testimonialsEmpty: "Nessuna testimonianza disponibile al momento.",

    collabsBadge: "Collaborazioni",
    collabsTitle: "Progetti e pagine con cui abbiamo collaborato",
    collabsText:
      "Una selezione di screenshot che mostrano collaborazioni, interazioni e attività condivise con pagine, creator e progetti online.",
    collabsEmpty: "Nessuna collaborazione disponibile al momento.",

    openImage: "Apri immagine",
    close: "Chiudi",
  },
  en: {
    navHome: "Home",
    navServices: "Digital Services",
    heroEyebrow: "Giveaways • Collaborations • Digital services",
    heroTitle: "We help pages, communities and online projects grow",
    heroSubtitle:
      "We create real giveaways, Instagram collaborations and digital services for anyone who wants more online visibility. Discover our Instagram profile or take a look at the services we offer.",
    heroInstagram: "Go to Instagram",
    heroServices: "Explore services",

    homeVisualTitle: "Real giveaways and collaborations",
    homeVisualText:
      "A reference point for people looking for prizes, visibility and new opportunities on Instagram.",
    homeStat1Label: "Focus",
    homeStat1Value: "Giveaways",
    homeStat2Label: "Goal",
    homeStat2Value: "Growth",
    homeStat3Label: "Services",
    homeStat3Value: "Digital",

    highlight1Title: "Real giveaways",
    highlight1Text:
      "We organize giveaways with real prizes and simple participation.",
    highlight2Title: "Collaborations",
    highlight2Text:
      "We help pages and projects gain more visibility and engagement.",
    highlight3Title: "Useful services",
    highlight3Text:
      "We create showcase websites and tools designed for creators and Instagram profiles.",

    servicesEyebrow: "Digital services",
    servicesTitle: "Our services",
    servicesSubtitle:
      "We offer useful services for people who want to grow online, improve their digital presence and manage their Instagram profile better.",

    siteBadge: "Showcase websites",
    siteTitle: "Showcase website creation",
    siteText1:
      "We create modern, simple and professional showcase websites at a great price. If you have a business, a project or a personal brand, we can help you build a clean and elegant online presence that matches your image.",
    siteText2:
      "Contact us to request a custom quote based on your needs.",
    siteBtn: "Request a quote",

    followerBadge: "Instagram",
    followerTitle: "Follower analysis",
    followerText1:
      "Do you want to know which accounts you follow but do not follow you back? We can help you get a clear list of profiles that do not return the follow, so you can have a more organized overview of your account.",
    followerText2:
      "This service is designed for people who want better control over their Instagram profile and a clearer understanding of their connections.",
    followerBtn: "Contact us to learn more",

    navSocialProof: "Reviews",

    socialProofEyebrow: "Community • Feedback • Collaborations",
    socialProofTitle: "What people say about us",
    socialProofSubtitle:
      "A collection of testimonials and collaborations that better reflect our journey, our relationship with the community and the experiences we have shared over time.",

    testimonialsBadge: "Testimonials",
    testimonialsTitle: "Messages, feedback and thank-you notes",
    testimonialsText:
      "Here we collect some screenshots received from our community: simple words, real feedback and messages that truly matter to us.",
    testimonialsEmpty: "No testimonials available at the moment.",

    collabsBadge: "Collaborations",
    collabsTitle: "Projects and pages we have collaborated with",
    collabsText:
      "A selection of screenshots showing collaborations, interactions and shared activities with pages, creators and online projects.",
    collabsEmpty: "No collaborations available at the moment.",

    openImage: "Open image",
    close: "Close",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "it");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (key) => translations[lang]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}