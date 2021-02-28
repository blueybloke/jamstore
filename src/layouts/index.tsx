import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Index: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Index;
