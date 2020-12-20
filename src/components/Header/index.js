import { HeaderContainer, NavButton, GroupButton, Button, NavTab, TabButton } from './styles';

import LogoPNG from '../../assets/logo.png';
import { Link } from 'react-router-dom';

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
        <Link to="/snack">
          <TabButton>Lanches</TabButton>
        </Link>
        <Link to="/drink">
          <TabButton>Bebidas</TabButton>
        </Link>
      </NavTab>
    </HeaderContainer>
  );
}
