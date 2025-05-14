import styled from "styled-components";
import { colors, shapes, typography, mixins } from "../../styles/designSystem";

// Layout principal
export const MainContent = styled.div`
  padding: 0 0 24px;
`;

// Hero Section (Banner principal)
export const HeroSection = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${colors.primary.main};
  border-radius: ${shapes.borderRadius.medium};
  overflow: hidden;
  position: relative;
  margin: 16px 0;
  padding: 20px 24px;
  background-image: url('https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=826&t=st=1715903400~exp=1715904000~hmac=6a8f9bb6ca875d3b0b1229795f25f950ff4a7ff8019fcc1249a41f32bb4100fe');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  max-width: 60%;
  color: white;
  
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 14px;
    margin-bottom: 16px;
    opacity: 0.9;
  }
`;

export const ActionButton = styled.button`
  background-color: ${colors.secondary.main};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${colors.secondary.dark};
    transform: translateY(-2px);
    box-shadow: ${shapes.shadows.small};
  }
`;

// Seção de categorias
export const CategorySection = styled.section`
  margin: 24px 0;
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${colors.text.primary};
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 4px 0;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 72px;
  
  span {
    font-size: 12px;
    font-weight: 500;
    margin-top: 8px;
    color: ${colors.text.secondary};
  }
`;

export const CategoryItemIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #F5F5F5;
  ${mixins.flexCenter}
  color: ${colors.primary.main};
  
  &:hover {
    background-color: ${colors.primary.light};
    color: white;
    cursor: pointer;
  }
`;

// Seção de itens populares
export const PopularItemsSection = styled.section`
  margin: 24px 0;
`;

export const PopularItemsHeader = styled.div`
  ${mixins.flexBetween}
  margin-bottom: 16px;
  
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${colors.text.primary};
  }
`;

export const SeeAllLink = styled.a`
  font-size: 14px;
  color: ${colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    color: ${colors.primary.main};
    text-decoration: underline;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
`;

export const ItemCard = styled.div`
  background-color: white;
  border-radius: ${shapes.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${shapes.shadows.small};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: ${shapes.shadows.medium};
    transform: translateY(-4px);
  }
`;

export const ItemImage = styled.div`
  width: 100%;
  height: 120px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemInfo = styled.div`
  padding: 12px;
`;

export const ItemName = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 4px;
  color: ${colors.text.primary};
`;

export const ItemDetail = styled.p`
  font-size: 12px;
  color: ${colors.text.secondary};
  margin: 0 0 8px;
`;

export const ItemPrice = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${colors.text.primary};
`;

export const ItemRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 6px;
  
  span {
    font-size: 12px;
    font-weight: 600;
    color: #FFB74D;
  }
`;

// Mantenho os estilos anteriores para compatibilidade
export const CardDetach = styled.div`
  display: none;
`;

export const CardFooter = styled.div`
  display: none;
`;

export const CardGroup = styled.div`
  display: none;
`;

export const CardGroupTitle = styled.h2`
  display: none;
`;

export const CardProduct = styled.div`
  display: none;
`;

export const CardProductBody = styled.div`
  display: none;
`;

export const CardProductFooter = styled.div`
  display: none;
`;

export const PromoTag = styled.div`
  display: none;
`;

export const ProductPrice = styled.div`
  display: none;
`;

export const ProductRating = styled.div`
  display: none;
`;

export const QuickAccessSection = styled.div`
  display: none;
`;

export const QuickAccessButton = styled.button`
  display: none;
`;
