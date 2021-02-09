import { Cta } from "../content";
import styles from "./button.module.scss";

interface ButtonProps {
  button: Cta;
  newTab: boolean;
}

export const Button = ({ button, newTab }: ButtonProps) => {
  function scrollToSection(section: string) {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  return (
    <span className={styles.button}>
      {!newTab ? (
        <a onClick={() => scrollToSection(button.link)}>{button.name}</a>
      ) : (
        <a href={button.link} target="_blank" rel="noopener noreferrer">
          {button.name}
        </a>
      )}
    </span>
  );
};
