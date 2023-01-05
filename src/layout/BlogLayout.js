import React from "react";

import Footer from "../components/Footer/Footer";
import BlogHeader from "../components/BlogHeader/BlogHeader";
import { Container } from "./LayoutStyles";

export const BlogLayout = ({ children, error }) => {
  return (
    <Container>
      <BlogHeader />
      <main>{children}</main>
      <Footer hidden={error} />
    </Container>
  );
};
