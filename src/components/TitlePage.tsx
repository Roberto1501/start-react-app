import React from "react";

interface TitlePageProps {
  title: string;
  color?: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ title, color }) => {
  //SEM IF TERNARY
  //     let colorDefault ="#ea0eb7";

  //     if(color){
  //         colorDefault = color
  //     }

  //   return <h1 style={{ color: colorDefault }}>{title}</h1>;

  return <h1 style={{ color: color ? color : "#ea0eb7" }}>{title}</h1>;
};

export default TitlePage;
