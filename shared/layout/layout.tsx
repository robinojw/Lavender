import React, { useEffect } from "react";

import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import styles from "./layout.module.scss";

const header = {
  title: "Lavender English",
  links: [
    {
      name: "Course",
      link: "/course"
    },
    {
      name: "About",
      link: "/about"
    }
  ]
};

const footer = {
  social: [
    {
      image: "/fb.svg",
      link: "https://facebook.com"
    },
    {
      image: "/twitter.svg",
      link: "https://twitter.com"
    },
    {
      image: "/insta.svg",
      link: "https://instagram.com"
    }
  ],
  links: [
    {
      name: "Back to top ",
      link: "#top"
    },
    {
      name: "Course",
      link: "/course"
    },
    {
      name: "About",
      link: "/about"
    }
  ],
  email: "hello@lavenderenglish.com",
  contact: "122 Madrid Avenue,\nGaspacho Land,\nMadrid 1411\n\n07337549353"
};

export const Layout = ({ children }) => {
  return (
    <div>
      <Header header={header} />
      <div className={styles.container}>{children}</div>
      <Footer footer={footer} />
    </div>
  );
};
