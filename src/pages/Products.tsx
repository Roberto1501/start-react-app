import React from "react";
import NavigationApp from "../components/NavigationApp";
import TitlePage from "../components/TitlePage";
import WrapperStyled from "../components/WrapperStyled";

const Products: React.FC = () => {
  return (
    <>
      <WrapperStyled>
        <TitlePage title="Produtos" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          iusto suscipit at repellat illum iste voluptas. Excepturi velit atque
          at dolor delectus minus aliquam aperiam iste pariatur? Quasi, autem
          cum.
        </p>
        <NavigationApp />
      </WrapperStyled>
    </>
  );
};

export default Products;
