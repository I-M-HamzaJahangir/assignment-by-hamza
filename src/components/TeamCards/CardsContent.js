import styles from "./cardcontent.module.css";
const CardsContent = ({ content }) => {
  const { img, name, text } = content;
  return (
    <section className="team-section my-5 d-flex  align-items-stretch">
      <div className={`${styles.team__card} shadows-sm text-center`}>
        <div className={`${styles.img__wrapper}`}>
          <img src={img} alt="user image" />
        </div>
        <h4 className="user-name m-0">{name}</h4>
        <p className="content">{text}</p>
      </div>
    </section>
  );
};

export default CardsContent;
