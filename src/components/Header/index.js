import { HeaderContainer, NavButton, GroupButton, Button, NavTab, TabButton } from './styles';

import LogoPNG from '../../assets/logo.png';

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
        <TabButton>Lanches</TabButton>
        <TabButton>Bebidas</TabButton>
      </NavTab>
    </HeaderContainer>
  );
}
