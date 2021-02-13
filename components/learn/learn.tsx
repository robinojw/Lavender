import { Picture } from "../../shared/content";
import styles from "./learn.module.scss";

interface LearnContent {
  title: string;
  description: string;
  image: Picture;
}

interface LearnProps {
  learn: LearnContent;
}

export const Learn = ({ learn }: LearnProps) => {
  return (
    <div className={styles.learn}>
      <div className={styles.info}>
        <div>
          <h2>{learn.title}</h2>
          <p>{learn.description}</p>
        </div>
      </div>
      <picture>
        <source srcSet={learn.image.url} type="image/webp" />
        <img src={learn.image.url} loading="lazy" />
      </picture>
    </div>
  );
};
