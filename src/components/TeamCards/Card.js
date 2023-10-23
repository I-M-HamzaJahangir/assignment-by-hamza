import CardsContent from "./CardsContent";
import userOne from "../../assets/images/user-1.png";
import userTwo from "../../assets/images/user-2.png";
import userThree from "../../assets/images/user-3.png";
import styles from "./card.module.css";
import About from "../About/About";

const Card = () => {
  const cardsContent = [
    {
      id: 1,
      img: userOne,
      name: "Cristian Testoni",
      text: "Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica.",
    },
    {
      id: 2,
      img: userTwo,
      name: "Francesco Gavioli",
      text: "Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici.",
    },
    {
      id: 3,
      img: userThree,
      name: "Massimo Fabi",
      text: "Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori",
    },
  ];

  return (
    <section id="chi-samo-section">
      <div className="container">
        <About />
        <div className="row g-4">
          {cardsContent?.map((content) => {
            const { id } = content;
            return (
              <div className="col-md-6 col-xl-4" key={id}>
                <CardsContent content={content} />
              </div>
            );
          })}
        </div>
        {/* blockqoute */}
        <blockquote
          className={`blockquote text-center ${styles.qoute__wrapper} `}
        >
          <p className={`${styles.block__text} mb-3`}>
            Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
            componente di una soluzione ingegneristica più completa che
            comprende sensoristiche avanzate e l'integrazione con i sistemi
            domotici di casa.
          </p>
          <footer className="blockquote-footer">Cristian Testoni</footer>
        </blockquote>
        {/* blockqoute */}
      </div>
    </section>
  );
};

export default Card;
