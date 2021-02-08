import React, { useEffect } from "react";

import { Header } from "../header/header";

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
    </div>
  );
};
