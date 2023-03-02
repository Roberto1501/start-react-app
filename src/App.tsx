import React from "react";
import GlobalStyled from "./config/GlobalStyled";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyled />
      <AppRoutes />
    </>
  );
};

export default App;
