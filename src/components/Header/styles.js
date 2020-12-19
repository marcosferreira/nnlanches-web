import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 140px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background-color: #FEC024;
  color: #FFF;

  img {
    width: 100px;
    margin-left: 10px;
  }
`;


export const NavButton = styled.nav``;

export const GroupButton = styled.div``;

export const Button = styled.div``;

export const NavTab = styled.nav`
  width: 100%;
`;

export const TabButton = styled.button`
  width: 50%;
  height: 50px;

  border: none;
  border-radius: 0;
  background-color: #FEC024;

  color: #FFF;
  font-size: 1.2rem;

  &:active {
    background-color: #FFD15C;
  }
  &:focus {
    background-color: #FFD15C;
  }
`;
