import styles from "./category.module.css";

import cardList from "./cardList";
const Category = () => {
  return (
    <section className={styles.category__section} id="wy-sire-section">
      <div className="container">
        <div className={styles.main__heading}>
          <h1 className="text-center mb-0">Perchè S.I.R.E.</h1>
        </div>
        <div className="row g-4">
          {cardList?.map(({ id, icon, title, txtContent }) => {
            return (
              <div className="col-md-6 col-lg-4" key={id}>
                <div className={styles.card__wrap}>
                  <div className="">
                    <img src={icon} alt="card" />
                  </div>
                  <div>
                    <h6>{title}</h6>
                  </div>
                  <div>
                    <p>{txtContent}</p>
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

export default Category;
