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
        <source srcSet={learn.image.webp} type="image/webp" />
        <img
          alt={learn.image.alt}
          src={learn.image.fallbackImg}
          loading="lazy"
        />
      </picture>
    </div>
  );
};
