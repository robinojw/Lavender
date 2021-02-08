import { Cta } from "../content";

interface ButtonProps {
  button: Cta;
  newTab: boolean;
}

export const Button = ({ button, newTab }: ButtonProps) => {
  return (
    <>
      {newTab ? (
        <a href={button.link}> {button.name}</a>
      ) : (
        <a href={button.link} target="_blank" rel="noopener noreferrer">
          {button.name}
        </a>
      )}
      ;
    </>
  );
};
