import styles from "./process.module.css";
import bg3 from "../../assets/images/bg-3.jpg";
import processSteps from "./processSteps";
const Process = () => {
  return (
    <section
      className={styles.process__section}
      style={{ background: `url(${bg3})` }}
      id="work-section"
    >
      <div className="container">
        <div className={styles.main__heading}>
          <h1 className="text-center mb-0">Connettiti al sole anche tu</h1>
        </div>
        <div className={styles.frame__wrapper}>
          {processSteps?.map(({ id, image, icon, title, description }) => (
            <div className="position-relative" key={id}>
              <img src={image} alt="" className="img-fluid" />
              <div className={styles.frame__content}>
                <img src={icon} alt="" height="46" width="auto" />
                <h6>{title}</h6>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button type="button">Collegati al sole</button>
        </div>
      </div>
    </section>
  );
};

export default Process;
