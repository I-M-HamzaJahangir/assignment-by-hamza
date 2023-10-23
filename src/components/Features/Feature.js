import bgImg from "../../assets/images/bg-2.jpg";
import styles from "./feature.module.css";
import { featureList } from "./featureList";
const Feature = () => {
  return (
    <section
      id="sire-feature-section"
      className={styles.feature__section}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <div className={styles.main__heading}>
          <h1 className="text-center mb-0">
            Connesso, Intelligente, Resistente
          </h1>
        </div>
        <div className="row gy-4">
          {featureList?.map((list) => {
            const { id, title, icon, textContet } = list;
            return (
              <div className="col-md-6" key={id}>
                <div className="wrap d-md-flex gap-md-3">
                  <div className={`${styles.icon__wrap} mb-3 mb-md-0`}>
                    <img src={icon} alt="icon here" />
                  </div>
                  <div className={styles.feature__content}>
                    <div>
                      <h4>{title}</h4>
                    </div>
                    <div>
                      <p>{textContet}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
