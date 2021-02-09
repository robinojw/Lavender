import { Picture } from "../../shared/content";
import { Cta } from "../../shared/content";
import styles from "./course-info.module.scss";

interface CourseContent {
  title: string;
  description1: string;
  description2: string;
  caption: Cta;
  image: Picture;
}

interface CourseProps {
  courseInfo: CourseContent;
}

export const CourseInfo = ({ courseInfo }: CourseProps) => {
  return (
    <div className={styles.course}>
      <div className={styles.title}>
        <h2>{courseInfo.title}</h2>
      </div>
      <div className={styles.info}>
        <p className={styles.medium}>{courseInfo.description1}</p>
        <p>{courseInfo.description2}</p>
        <a href={courseInfo.caption.link}>
          <picture>
            <source srcSet={courseInfo.image.webp} type="image/webp" />
            <img
              alt={courseInfo.image.alt}
              src={courseInfo.image.fallbackImg}
              loading="lazy"
            />
          </picture>
        </a>
        <a className={styles.caption} href={courseInfo.caption.link}>
          <div>
            <p>→</p>
          </div>
          <p>{courseInfo.caption.name}</p>
        </a>
      </div>
    </div>
  );
};
