import styled from "styled-components";
import { colors, shapes, mixins } from "../../styles/designSystem";

export const Carousel = styled.div`
  width: 100%;
  ${mixins.flexBetween}
  margin: 16px 0;
  background-color: ${colors.background.paper};
  padding: 12px 0;
  border-radius: ${shapes.borderRadius.medium};
  box-shadow: ${shapes.shadows.small};

  ul {
    width: 100%;
    list-style: none;
    overflow-y: auto;
    overflow-x: auto;
    scroll-behavior: smooth;
    display: flex;
    gap: 12px;
    padding: 0 16px;

    li {
      width: 70px;
      height: 70px;
      flex-shrink: 0;

      button {
        width: 70px;
        height: 70px;
        border-radius: ${shapes.borderRadius.circle};
        border: none;
        ${mixins.flexCenter}
        background-color: ${colors.primary.main};
        ${mixins.transition()}

        &:hover {
          background-color: ${colors.primary.light};
          transform: scale(1.05);
        }

        &:active {
          background-color: ${colors.primary.dark};
        }
      }
    }
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: ${shapes.borderRadius.circle};
    border: 3px solid ${colors.background.paper};
    box-shadow: ${shapes.shadows.small};
    ${mixins.transition()}
    
    &:hover {
      border-color: ${colors.primary.main};
      transform: scale(1.05);
    }
  }
`;

export const CarouselButton = styled.button`
  padding: 10px;
  background-color: ${colors.primary.main};
  color: ${colors.primary.contrastText};
  border: none;
  border-radius: ${shapes.borderRadius.circle};
  ${mixins.flexCenter}
  cursor: pointer;
  ${mixins.transition()}
  margin: 0 8px;
  width: 36px;
  height: 36px;

  &:hover {
    background-color: ${colors.primary.light};
    transform: scale(1.1);
  }

  &:active {
    background-color: ${colors.primary.dark};
  }
`;
