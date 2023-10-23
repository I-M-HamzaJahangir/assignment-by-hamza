import React from "react";
import cardImg from "../../assets/images/card-1.png";
import cardImg2 from "../../assets/images/card-2.png";
import arrow from "../../assets/images/arrow.svg";
import batteryImg from "../../assets/images/battery-circle.png";
import familyImg from "../../assets/images/family-circle.png";
import styles from "./sirecards.module.css";

const cardData = [
  {
    title: "S.I.R.E Direct",
    image: cardImg,
    list: [
      "Sistema Plugin",
      "Struttura meccanizzata in poliuera e sensoristica intelligente",
      "Pannelli alta efficienza da 1KW",
      "Inverter e connessione all'impianto domestico",
      "App di controllo e gestione",
    ],
    recommendedFor: ["Devices", "Families"],
    consigliatoPerHeading: "CONSIGLIATO PER:",
    accordionTitle: "Scopri le caratteristiche tecniche",
    accordionList: [
      "Tempo di ricarica medio in estate",
      "TBD Tempo di scarica a 16A.",
      "TBD Autonomia dalla rete elettrica.",
      "TBD Autonomia in caso di blackout.",
      "2gg Immissione di CO2 da 1.022 kg a 500 kg annui",
      "Tempo di ricarica medio in estate.",
    ],
  },
  {
    title: "S.I.R.E Full",
    image: cardImg2,
    list: [
      "Struttura meccanizzata in poliuera e sensoristica intelligente",
      "Pannelli alta efficienza da 1KW",
      "Inverter e connessione all'impianto domestico",
      "App di controllo e gestione",
    ],
    recommendedFor: ["Devices", "Families"],
    consigliatoPerHeading: "CONSIGLIATO PER:",
    accordionTitle: "Title here if they have otherwise remove this",
    accordionList: [
      "Sistema 2 kW con accumulo.",
      "Tempo di ricarica medio in estate is 5 ore e 30 minuti",
      "Tempo di scarica a 16A is 8 ore.",
      "Autonomia dalla rete elettrica 62Po.",
    ],
  },
];

const SireCards = () => {
  return (
    <section className={styles.sire__card__section} id="wy-sire">
      <div className="container">
        <div className="row g-4">
          {cardData?.map((card, index) => (
            <div className="col-md-6" key={index}>
              <div className={`${styles.card__wrap} card`}>
                <img src={card.image} className="card-img-top" alt="card top" />
                <div className={`${styles.card__body__wrap} card-body py-4`}>
                  <h5 className="card-title">{card.title}</h5>
                  <div className={styles.list__wrapper}>
                    {card?.list?.map((item, itemIndex) => (
                      <div className="d-flex gap-3" key={itemIndex}>
                        <img src={arrow} alt="right arrow icon" />
                        <p className="mb-0">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className={styles.options__wrap}>
                    <h6>{card.consigliatoPerHeading}</h6>
                    <div className={styles.options}>
                      <div className={styles.option__icon_wrap}>
                        <div>
                          <img src={batteryImg} alt="icon" />
                        </div>
                        <span>{card.recommendedFor[0]}</span>
                      </div>
                      <div className={styles.option__icon_wrap}>
                        <div>
                          <img src={familyImg} alt="icon" />
                        </div>
                        <span>{card.recommendedFor[1]}</span>
                      </div>
                    </div>
                  </div>
                  {/* accordion */}
                  <div className="accordion" id={`accordionExample${index}`}>
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className="accordion-button border-0 shadow-none px-0 bg-transparent fw-medium"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="true"
                          aria-controls={`collapse${index}`}
                        >
                          {card.accordionTitle}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse show border-0"
                        aria-labelledby={`heading${index}`}
                        data-bs-parent={`#accordionExample${index}`}
                      >
                        <div className="accordion-body p-0">
                          <ul className={styles.accordion__list}>
                            {card?.accordionList?.map(
                              (listItem, listItemIndex) => (
                                <li key={listItemIndex}>{listItem}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* accordion */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SireCards;
