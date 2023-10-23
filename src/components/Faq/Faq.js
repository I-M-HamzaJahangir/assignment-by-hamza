import styles from "./faq.module.css";
import faqData from "./faqData";

const Faq = () => {
  return (
    <section className={styles.faq__section}>
      <div className="container">
        <div className={styles.main__heading}>
          <h1 className="text-center mb-0">Frequently Asked Questions</h1>
        </div>
        {faqData?.map(({ id, question, answer }) => {
          return (
            <div
              key={id}
              className="accordion"
              id={`accordion${id}`}
              style={{ marginBottom: "20px" }}
            >
              <div
                className="accordion-item border-0"
                style={{ boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <h2 className="accordion-header" id={`heading${id}`}>
                  <button
                    className={`accordion-button fw-medium ${
                      id === 1 ? "" : "collapsed"
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${id}`}
                    aria-expanded={id === 1 ? "true" : "false"}
                    aria-controls={`collapse${id}`}
                  >
                    {question}
                  </button>
                </h2>
                <div
                  id={`collapse${id}`}
                  className={`accordion-collapse ${
                    id === 1 ? "collapse show" : "collapse"
                  }`}
                  aria-labelledby={`heading${id}`}
                  data-bs-parent={`#accordion${id}`}
                >
                  <div className="accordion-body pt-0">{answer}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
