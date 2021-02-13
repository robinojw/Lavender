import { Button } from "../../shared/button/button";
import { Picture, Cta } from "../../shared/content";
import styles from "./hero.module.scss";

interface HeroContent {
  title: string;
  image: Picture;
  cta: Cta;
}

interface HeroProps {
  hero: HeroContent;
}

export const Hero = ({ hero }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <picture>
        <source srcSet={hero.image.url} type="image/webp" />
        <img src={hero.image.url} alt="" />
      </picture>
      <div>
        <h1>{hero.title}</h1>
        <Button button={hero.cta} newTab={false} />
      </div>
    </div>
  );
};
