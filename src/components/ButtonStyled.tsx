import styled from "styled-components";

interface ButtonStyledProps {
  outline?: boolean;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${(props) => (props.outline ? "white" : "#ea0eb7")};
  border-radius: 8px;
  border: 2px solid #ea0eb7;
  cursor: pointer;
  padding: 15px;
  color: ${(props) => (props.outline ? "#ea0eb7" : "white")};
  font-weight: 500;
  font-size: 15px;
  margin: 10px;

  &:hover {
    background-color: ${(props) => (props.outline ? "#ea0eb7" : "#ab0684")};
    color: white;
    border-color: ${(props) => (props.outline ? "#ea0eb7" : "#ab0684")};
  }
`;

export default ButtonStyled;
