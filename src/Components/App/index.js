import styles from "./app.module.css";
import jsonData from "../../data.json";
import "bootstrap/dist/css/bootstrap.css";

const datas = jsonData.comments;

export default function App() {
  return (
    <main className={`${styles.main} d-flex flex-column mb-4 px-3`}>
      {datas.map((data, index) => {
        return (
          <div key={index} className={styles.container}>
            <div className={`${styles.container__inner} d-flex mt-4`}>
              <img
                className={styles.container__inner__avatar}
                src={`/avatars/${data.avatar}`}
                alt="avatar"
              />
              <div className={`${styles.inner__dataContainer} ms-3`}>
                <p
                  className={`${styles.inner__dataContainer__content} fw-semibold mb-2`}
                >
                  {data.content}
                </p>
                <p className={`${styles.inner__dataContainer__title} mb-0`}>
                  {data.title}
                </p>
              </div>
            </div>
            {data.comment_to_comment && (
              <p className={styles.container__commentToComment}>
                {data.comment_to_comment}
              </p>
            )}
          </div>
        );
      })}
    </main>
  );
}
