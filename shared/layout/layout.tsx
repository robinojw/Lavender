import React, { useEffect } from "react";

import styled from "styled-components";

import { Header } from "../header/header";

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

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
    <Container>
      <Header header={header} />
    </Container>
  );
};
