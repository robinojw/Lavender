import { Button } from "../../shared/button/button";
import { Picture, Cta } from "../../shared/content";
import styles from "./hero.module.scss";

interface HeroContent {
  title: string;
  image: Picture;
  button: Cta;
}

interface HeroProps {
  hero: HeroContent;
}

const button = {
  name: "Start Learning",
  link: "#signup"
};

export const Hero = ({ hero }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <picture>
        <source srcSet={hero.image.webp} type="image/webp" />
        <img alt={hero.image.alt} src={hero.image.fallbackImg} />
      </picture>
      <div>
        <h1>{hero.title}</h1>
        <Button button={button} newTab={false} />
      </div>
    </div>
  );
};
