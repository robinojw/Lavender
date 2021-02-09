import { Cta } from "../content";
import styles from "./footer.module.scss";
interface Social {
  image: string;
  link: string;
}

interface FooterContent {
  social: Array<Social>;
  links: Array<Cta>;
  email: string;
  contact: string;
}

interface FooterProps {
  footer: FooterContent;
}

export const Footer = ({ footer }: FooterProps) => {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.social}>
          {footer.social.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img src={social.image} loading="lazy" alt="" />
            </a>
          ))}
        </div>
        <div className={styles.links}>
          {footer.links.map((href, index) => (
            <a href={href.link} key={index}>
              {href.name}
            </a>
          ))}
        </div>
      </div>
      <div>
        <p>{footer.contact}</p>
        <a href={"mailto:" + footer.email}>{footer.email}</a>
        <p className={styles.classy}>
          this website is a{" "}
          <a
            href="https://robinw.co.uk"
            target="_blank"
            rel="noopner noreferrer"
          >
            robinw
          </a>{" "}
          production
        </p>
      </div>
    </div>
  );
};
