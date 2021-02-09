import { useState } from "react";

import Link from "next/link";

import { Cta } from "../content";
import styles from "./header.module.scss";
interface HeaderContent {
  title: string;
  links: Array<Cta>;
}

interface HeaderProps {
  header: HeaderContent;
}

export const Header = ({ header }: HeaderProps) => {
  const title = header.title.split(" ");
  const [menu, setMenu] = useState(false);

  const menuAni = menu
    ? {
        transform: "translateX(40%)"
      }
    : { transform: "translateX(100%)" };

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <a>
            <div className={styles.title}>
              <p>{title[0]}</p>
              <p className={styles.shift}>{title[1]}</p>
            </div>
          </a>
        </Link>
        <div className={styles.links}>
          {header.links.map((link, index) => (
            <Link href={link.link} key={index}>
              <a>{link.name}</a>
            </Link>
          ))}
        </div>
      </div>
      <img
        alt=""
        className={styles.ham}
        loading="lazy"
        onClick={toggleMenu}
        src="/ham.svg"
      />
      <div className={styles.menu} style={menuAni}>
        <img
          alt=""
          className={styles.exit}
          loading="lazy"
          onClick={toggleMenu}
          src="/exit.svg"
        />
        <div className={styles.mobLinks}>
          {header.links.map((link, index) => (
            <Link href={link.link} key={index}>
              <a>{link.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
