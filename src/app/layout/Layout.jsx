import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer
        title={"Have any idea?"}
        text={"Let's work together"}
        mail={"nico.sierra13@gmail.com"}
        label={"Developed by Nicolás Sierra"}
      />
    </div>
  );
};

export default Layout;
