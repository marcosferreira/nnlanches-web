import styled from "styled-components";
import { colors, typography, shapes, mixins } from "../../styles/designSystem";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${colors.primary.main};
  color: ${colors.primary.contrastText};
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;

  img {
    width: 40px;
    margin-right: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const TopHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
`;

export const LocationSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: ${shapes.borderRadius.medium};
  cursor: pointer;
  ${mixins.transition()}
  
  span {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
`;

export const NavButton = styled.nav`
  width: 100%;
  ${mixins.flexBetween}
  padding: 8px 0;
`;

export const GroupButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
  border-radius: ${shapes.borderRadius.medium};
  cursor: pointer;
  ${mixins.transition()}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active, &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const NavTab = styled.nav`
  width: 100%;
  display: none;

  .active {
    background-color: ${colors.primary.dark};
    font-weight: ${typography.button.fontWeight};
  }

  a {
    width: 100%;
    height: 40px;
    ${mixins.flexCenter}
    border: none;
    border-radius: 0;
    background-color: ${colors.primary.main};
    color: ${colors.primary.contrastText};
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    ${mixins.transition()}

    &:hover {
      background-color: ${colors.primary.light};
    }

    &:focus, &:active {
      background-color: ${colors.primary.dark};
    }
  }
`;
