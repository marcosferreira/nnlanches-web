import { FiShoppingBag, FiMenu, FiMapPin } from "react-icons/fi";

import {
  HeaderWrapper,
  Container,
  TopHeader,
  LocationSelector,
  UserAvatar,
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
        <TopHeader>
          <NavButton>
            <img src={LogoPNG} alt="logo" />
            <GroupButton>
              <LocationSelector>
                <FiMapPin size={16} color="white" />
                <span>California, US</span>
              </LocationSelector>
              <UserAvatar>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Usuário" />
              </UserAvatar>
            </GroupButton>
          </NavButton>
        </TopHeader>
        <NavTab>
          <NavLink 
            to="/nnlanches-web"
            className={({ isActive }) => isActive ? "active" : ""}
            end
          >
            Início
          </NavLink>
          <NavLink 
            to="/nnlanches-web/snack"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Lanches
          </NavLink>
          <NavLink 
            to="/nnlanches-web/drink"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Bebidas
          </NavLink>
        </NavTab>
      </Container>
    </HeaderWrapper>
  );
}
