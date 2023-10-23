import overlap1 from "../../assets/images/overlap-1.png";
import overlap2 from "../../assets/images/overlap-2.png";
import ellipse from "../../assets/images/Ellipse-1.png";
import shape from "../../assets/images/dotted-green.png";
import circle from "../../assets/images/dotted-circle.png";
import styles from "./sire.module.css";
import { motion } from "framer-motion";

const Sire = () => {
  return (
    <section
      className={styles.sir__section}
      id="sir-section"
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        <div className="row gap-5 gap-md-0">
          <motion.div
            initial="from"
            whileInView="to"
            variants={{
              from: { x: "-100%", opacity: 0 },
              to: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="col-md-6 position-relative"
          >
            <div className={`${styles.over__lap}`}>
              <div className={`${styles.overlap__1}`}>
                <img src={overlap1} alt="energy transmission" />
              </div>
              <div className={`${styles.overlap__2}`}>
                <img src={overlap2} alt=" storing energy" />
              </div>
            </div>
            <img
              src={ellipse}
              className={`img-fluid position-absolute top-50 start-50 translate-middle ${styles.ellipse__img}`}
              alt=""
            />
            <img
              src={shape}
              alt="decorative icon"
              className={`position-absolute  ${styles.shapes__1}`}
            />
            <img
              src={shape}
              alt="decorative icon"
              className={` position-absolute ${styles.shapes__2}`}
            />
          </motion.div>
          <motion.div
            initial="from"
            whileInView="to"
            variants={{
              from: { x: "100%", opacity: 0 },
              to: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="col-md-6 align-self-center position-relative py-5"
          >
            <div className={styles.sub__heading}>
              <span>S.I.R.E</span>
            </div>
            <div className={styles.main__heading}>
              <h1>Smart Integrated Renewable Energy</h1>
            </div>
            <hr className={styles.hr__divider} />
            <div>
              <p className={styles.text__content}>
                S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo
                per la produzione, conversione e gestione dell'energia solare,
                studiato specificatamente per installazioni all'interno di
                condomini.
              </p>
            </div>
            <div>
              <img
                src={circle}
                alt="decoration"
                className="position-absolute top-0 end-0"
              />
              <img
                src={shape}
                alt="decoration"
                className="position-absolute d-none d-md-block"
                style={{ top: "-18%", insetInlineEnd: "22%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sire;
