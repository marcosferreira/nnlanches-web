import { FiShoppingBag, FiMenu } from 'react-icons/fi';

import { HeaderContainer, NavButton, GroupButton, Button, NavTab } from './styles';

import LogoPNG from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <HeaderContainer>
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
        <NavLink exact to="/">
          Início
        </NavLink>
        <NavLink exact to="/snack">
          Lanches
        </NavLink>
        <NavLink exact to="/drink">
          Bebidas
        </NavLink>
      </NavTab>
    </HeaderContainer>
  );
}
