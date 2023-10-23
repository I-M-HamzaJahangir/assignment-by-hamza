import heroImg from "../../assets/images/bg-1.jpg";
import styles from "./home.module.css";
import { motion } from "framer-motion";
const Home = () => {
  const heading = "Il tuo accesso al sole";
  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <section id="home-section">
      <div className={`${styles.hero__container} position-relative`}>
        <img src={heroImg} className="img-fluid" alt=" main" />
        <div
          className={` ${styles.content} position-absolute top-50 start-50 translate-middle`}
        >
          <h1 className="text-white text-center">
            <span className="visually-hidden">{heading}</span>
            <motion.span
              initial="hidden"
              animate="visible"
              transition={{
                staggerChildren: 0.08,
              }}
              aria-hidden
            >
              {heading.split("").map((char, i) => {
                return (
                  <motion.span key={i} variants={variant}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          </h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-white text-center"
          >
            Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
            assenza di tetto. La tua fonte d'energia, gratuita e sostenibile
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Home;
