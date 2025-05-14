import styled from 'styled-components';
import { colors, shapes, typography, mixins } from "../../styles/designSystem";

export const Container = styled.div`
  flex: 1;
  background-color: #333;
`;

export const PageContainer = styled.div`
  padding: 16px;
`;

export const PageTitle = styled.h1`
  color: ${colors.text.primary};
  margin-bottom: 24px;
  font-size: ${typography.h3.fontSize};
  position: relative;
  padding-bottom: 8px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: ${colors.primary.main};
    border-radius: ${shapes.borderRadius.small};
  }
`;

export const DrinkCategoriesWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  margin-bottom: 24px;
`;

export const CategoryButton = styled.button`
  padding: 10px 16px;
  background-color: ${({ active }) => active ? colors.primary.main : colors.background.paper};
  color: ${({ active }) => active ? colors.primary.contrastText : colors.text.primary};
  border: 1px solid ${({ active }) => active ? colors.primary.main : colors.divider};
  border-radius: ${shapes.borderRadius.medium};
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  ${mixins.transition()}

  &:hover {
    background-color: ${({ active }) => active ? colors.primary.dark : colors.background.default};
    transform: translateY(-2px);
  }
`;

export const DrinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

export const DrinkCard = styled.div`
  border-radius: ${shapes.borderRadius.medium};
  overflow: hidden;
  background-color: ${colors.background.paper};
  box-shadow: ${shapes.shadows.small};
  ${mixins.transition()}
  cursor: pointer;

  &:hover {
    box-shadow: ${shapes.shadows.medium};
    transform: translateY(-5px);
  }
`;

export const DrinkImageContainer = styled.div`
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mixins.transition()}

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const DrinkInfo = styled.div`
  padding: 16px;
`;

export const DrinkName = styled.h3`
  font-size: ${typography.h6.fontSize};
  margin-bottom: 8px;
  color: ${colors.text.primary};
`;

export const DrinkDescription = styled.p`
  font-size: ${typography.body2.fontSize};
  color: ${colors.text.secondary};
  margin-bottom: 16px;
`;

export const DrinkPrice = styled.div`
  ${mixins.flexBetween}

  span {
    font-size: ${typography.h6.fontSize};
    font-weight: 700;
    color: ${colors.secondary.main};
  }
`;

export const AddToCartButton = styled.button`
  background-color: ${colors.primary.main};
  color: ${colors.primary.contrastText};
  border: none;
  border-radius: ${shapes.borderRadius.small};
  padding: 6px 12px;
  font-weight: 500;
  ${mixins.transition()}

  &:hover {
    background-color: ${colors.primary.dark};
  }
`;
