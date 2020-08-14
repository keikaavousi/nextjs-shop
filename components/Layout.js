import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

const Layout = (props) => {
  return (
    <Container fluid className="px-0">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
