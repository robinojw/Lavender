import { Picture, Cta } from "../../shared/content";

interface HeroContent {
  title: string;
  image: Picture;
  button: Cta;
}

interface HeroProps {
  hero: HeroContent;
}

export const Hero = ({ hero }: HeroProps) => {
  return (
    <div>
      <h1>{hero.title}</h1>
      <picture>
        <source srcSet={hero.image.webp} type="image/webp" />
        <img alt={hero.image.alt} src={hero.image.fallbackImg} />
      </picture>
    </div>
  );
};
