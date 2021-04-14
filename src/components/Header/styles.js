import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 140px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background-color: #eeb014;
  color: #fff;

  img {
    width: 100px;
    margin-left: 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  background-color: #fec024;
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
    background-color: #ffd15c;
  }

  &:focus {
    background-color: #ffd15c;
  }
`;

export const NavTab = styled.nav`
  width: 100%;
  display: flex;

  .active {
    background-color: #ffd15c;
  }

  a {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 0;
    background-color: #fec024;

    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;

    &:focus {
      background-color: #ffd15c;
    }

    &:active {
      background-color: #ffd15c;
    }
  }
`;
