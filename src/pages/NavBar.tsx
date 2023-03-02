import React from 'react';
import {Link} from "react-router-dom";
import NavStyled from '../components/Nav';
import routes from '../routes/routes';


const NavBar: React.FC = () => {
  return (
    <React.Fragment>
      <NavStyled>
        {/* <Link to="/">
        Home
        </Link>

        <Link to= "/products">
        Produtos
        </Link>

        <Link to="/contact">
        Contatos
        </Link> */}

        {routes.map(item => {
            return(
                <>
                <Link to={item.url}>
                    {item.label}
                </Link>
                </>
            )
        })}
      </NavStyled>
      
    </React.Fragment>
  );
};

export default NavBar;
