import styles from "./about.module.css";
const About = () => {
  return (
    <section className={`${styles.about__section}`}>
      <div className="heading">
        <h1 className="text-uppercase text-center">chi siamo</h1>
        <p className="content">
          Solar Innovatio è una PMI innovativa italiana specializzata nella
          progettazione e realizzazione di sistemi fotovoltaici intelligenti.
          Solar Innovatio unisce alla decennale esperienza maturata nel panorama
          italiano nell'ambito delle soluzioni fotovoltaiche un approccio
          ingegneristico, innovativo, digitale alla principale fonte di energia
          rinnovabile.
        </p>
      </div>
    </section>
  );
};

export default About;
