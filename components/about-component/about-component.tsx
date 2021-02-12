import styles from "./about.module.scss";

interface AboutContent {
  title: string;
  description: string;
  subDes: string;
  email: string;
  phone: string;
}

interface AboutProps {
  about: AboutContent;
}

const profileImg = {
  background: "url('/grace.jpg') center top;",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

export const AboutComponent = ({ about }: AboutProps) => {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <h2>{about.title}</h2>
        <p className={styles.primary}>{about.description}</p>
        <p>{about.subDes}</p>
        <div className={styles.contact}>
          <p>
            <strong>Contact</strong>
          </p>
          <p>
            <a href={"mailto:" + about.email}>{about.email}</a>
          </p>
          <p>
            <a href={"tel:" + about.phone}>{about.phone}</a>
          </p>
        </div>
      </div>
      <div className={styles.photo} style={profileImg}></div>
    </div>
  );
};
