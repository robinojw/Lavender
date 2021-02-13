import { Button } from "../../shared/button/button";
import { Cta } from "../../shared/content";
import styles from "./signup.module.scss";

interface Features {
  image: string;
  description: string;
}

interface SignUpContent {
  cta: Cta;
  features: Array<Features>;
  price: string;
  term: string;
  title: string;
}

interface SignUpProps {
  signup: SignUpContent;
}

export const SignUp = ({ signup }: SignUpProps) => {
  return (
    <div className={styles.signup}>
      <h2>{signup.title}</h2>
      <div className={styles.features}>
        {signup.features.map((feat, index) => (
          <div key={index} className={styles.feat}>
            <img src={feat.image.url} loading="lazy" alt="" />
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.pricing}>
        <p>{signup.price}</p>
        <p>{signup.term}</p>
        <Button button={signup.cta} newTab={false} />
      </div>
    </div>
  );
};
