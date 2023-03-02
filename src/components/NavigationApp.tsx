import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes/routes";

const NavigationApp: React.FC = () => {
  return (
    <>
      {routes.map((item) => {
        return (
          <>
            <Link to={item.url}>{item.label}</Link>
          </>
        );
      })}
    </>
  );
};

export default NavigationApp;
