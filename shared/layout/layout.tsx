import React, { useEffect } from "react";

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

export const Layout = ({ children }) => {
  return (
    <div>
      <Header header={header} />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
