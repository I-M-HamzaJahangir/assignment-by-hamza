import headerLogo from "../../assets/logo/logo-1.svg";
import styles from "./topheader.module.css";
import headerList from "./headerData";

const TopHeader = () => {
  return (
    <header className={`${styles.top__header} d-none d-sm-block`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo d-none d-lg-flex">
            <a href="#">
              <img src={headerLogo} width="92" height="44" alt="site logo" />
            </a>
          </div>
          <div
            className={`${styles.contact__group} d-flex justify-content-between align-items-center flex-grow-1 flex-lg-grow-0 `}
          >
            {headerList?.map(({ iconImg, altText, info, id }) => {
              return (
                <div
                  key={id}
                  className={`${styles.contact__info} d-flex align-items-center `}
                >
                  <div className="icon">
                    <img src={iconImg} alt={altText} />
                  </div>
                  <div className={styles.contact}>{info}</div>
                </div>
              );
            })}
            <div className="">
              <a
                type="button"
                className={`${styles.contact__btn} d-flex justify-content-center align-items-center text-capitalize text-decoration-none   `}
              >
                contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
