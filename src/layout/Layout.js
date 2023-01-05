import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children, hidden, error }) => {
  return (
    <Container>
      <Header hidden={hidden} />
      <main>{children}</main>
      <Footer hidden={error} />
    </Container>
  );
};
