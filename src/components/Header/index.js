import { HeaderContainer, NavButton, GroupButton, Button, NavTab } from './styles';

import LogoPNG from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <HeaderContainer>
      <NavButton>
        <img src={LogoPNG} alt="logo" />
        <GroupButton>
          <Button></Button>
          <Button></Button>
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
