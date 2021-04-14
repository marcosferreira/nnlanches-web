import { FiShoppingBag, FiMenu } from "react-icons/fi";

import {
  HeaderWrapper,
  Container,
  NavButton,
  GroupButton,
  Button,
  NavTab,
} from "./styles";

import LogoPNG from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <NavButton>
          <img src={LogoPNG} alt="logo" />
          <GroupButton>
            <Button>
              <FiShoppingBag size={26} color="white" />
            </Button>
            <Button>
              <FiMenu size={26} color="white" />
            </Button>
          </GroupButton>
        </NavButton>
        <NavTab>
          <NavLink exact to="/nnlanches-web">
            Início
          </NavLink>
          <NavLink exact to="/nnlanches-web/snack">
            Lanches
          </NavLink>
          <NavLink exact to="/nnlanches-web/drink">
            Bebidas
          </NavLink>
        </NavTab>
      </Container>
    </HeaderWrapper>
  );
}
