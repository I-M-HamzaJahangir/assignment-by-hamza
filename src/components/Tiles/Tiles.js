import styles from "./tiles.module.css";
import tilesList from "./tilesList";
const Tiles = () => {
  return (
    <section className={styles.tiles__section} id="product-section">
      <div className="container">
        <div className="row g-4">
          {tilesList?.map(({ id, icon, head, txt }) => {
            return (
              <div className="col-md-4 col-lg-3 text-center" key={id}>
                <div className={`${styles.wrapper} bg-white`}>
                  <div>
                    <img src={icon} alt="" />
                  </div>
                  <div>{head !== "" && <h6 className="mb-0">{head}</h6>}</div>
                  <div>
                    <p className="mb-0">{txt}</p>
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

export default Tiles;
