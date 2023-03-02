import React from "react";
import NavigationApp from "../components/NavigationApp";
import TitlePage from "../components/TitlePage";
import WrapperStyled from "../components/WrapperStyled";

const Contact: React.FC = () => {
  return (
    <>
      <WrapperStyled>
        <TitlePage title="Contato" color="#e5d60a" />
        <NavigationApp />
      </WrapperStyled>
    </>
  );
};

export default Contact;
