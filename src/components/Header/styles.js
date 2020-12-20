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


export const NavButton = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GroupButton = styled.div`
  margin-right: 20px;
  margin-left: 10px;
`;

export const Button = styled.button`
  padding: 10px;

  background-color: transparent;
  border: none;
  border-radius: 4px;

  cursor: pointer;

  &:active {
    background-color: #FFD15C;
  }

  &:focus {
    background-color: #FFD15C;
  }
`;

export const NavTab = styled.nav`
  width: 100%;
  display: flex;

  .active {
    background-color: #FFD15C;
  }

  a {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 0;
    background-color: #FEC024;

    color: #FFF;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;


    &:focus {
      background-color: #FFD15C;
    }

    &:active {
      background-color: #FFD15C;
    }
  }
`;
