import React from "react";
import { Link } from "react-router-dom";
import ButtonStyled from "../components/ButtonStyled";
import NavigationApp from "../components/NavigationApp";
import TitlePage from "../components/TitlePage";
import WrapperStyled from "../components/WrapperStyled";

const Home: React.FC = () => {
  return (
    <>
      <WrapperStyled>
        <TitlePage title="Home" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          iusto suscipit at repellat illum iste voluptas. Excepturi velit atque
          at dolor delectus minus aliquam aperiam iste pariatur? Quasi, autem
          cum.
        </p>
        <ButtonStyled>Meu botão</ButtonStyled>
        <ButtonStyled outline={true}>Meu botão outline</ButtonStyled>
      </WrapperStyled>
    </>
  );
};

export default Home;
