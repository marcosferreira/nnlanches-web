import styled from "styled-components";
import { colors, shapes, typography, mixins } from "../../styles/designSystem";

export const ProductDetailContainer = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;

export const TopActions = styled.div`
  ${mixins.flexBetween}
  padding: 16px 0;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  ${mixins.flexCenter}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 240px;
  margin-bottom: 20px;
  border-radius: ${shapes.borderRadius.large};
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  }
`;

export const ProductContent = styled.div`
  background-color: #fff;
  border-radius: ${shapes.borderRadius.large};
  padding: 20px;
  margin-top: -60px;
  position: relative;
  z-index: 2;
  box-shadow: ${shapes.shadows.small};
`;

export const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  color: ${colors.text.secondary};
  font-size: 14px;
  
  svg {
    color: ${colors.secondary.main};
  }
`;

export const ProductTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${colors.text.primary};
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  
  span:first-of-type {
    font-weight: 600;
    font-size: 14px;
    margin-right: 4px;
  }
  
  span:last-of-type {
    font-size: 12px;
    color: ${colors.text.secondary};
  }
`;

export const ProductInfoGrid = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const ProductInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background-color: #f5f5f5;
  border-radius: 20px;
  
  span {
    font-size: 12px;
    font-weight: 500;
    color: ${colors.text.secondary};
  }
`;

export const ProductDescription = styled.div`
  margin: 20px 0;
  
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${colors.text.primary};
  }
  
  p {
    font-size: 14px;
    line-height: 1.5;
    color: ${colors.text.secondary};
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 30px;
  padding: 4px;
`;

export const CounterButton = styled.button`
  width: 32px;
  height: 32px;
  ${mixins.flexCenter}
  border: none;
  background-color: white;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  box-shadow: ${shapes.shadows.small};
  
  &:hover {
    background-color: #eee;
  }
`;

export const CounterValue = styled.span`
  padding: 0 16px;
  font-size: 16px;
  font-weight: 600;
`;

export const AddToCartButton = styled.button`
  flex-grow: 1;
  background-color: ${colors.secondary.main};
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${colors.secondary.dark};
    transform: translateY(-2px);
    box-shadow: ${shapes.shadows.medium};
  }
`;