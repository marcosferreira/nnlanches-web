import { Fragment } from "react";
import { FaStar, FaMotorcycle, FaHeart, FaPizzaSlice, FaDrumstickBite, FaHamburger } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

import Header from "../../components/Header";
import { Container } from "../../styles/GlobaStyles";

import {
  MainContent,
  HeroSection,
  HeroContent,
  ActionButton,
  CategorySection,
  CategoryTitle,
  CategoryList,
  CategoryItem,
  CategoryItemIcon,
  PopularItemsSection,
  PopularItemsHeader,
  SeeAllLink,
  ItemsGrid,
  ItemCard,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemDetail,
  ItemPrice,
  ItemRating,
} from "./styles";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Container>
        <MainContent>
          <HeroSection>
            <HeroContent>
              <h1>The Fastest in <br/> Food Delivery</h1>
              <p>Entrega rápida de suas refeições favoritas à sua porta</p>
              <ActionButton>Order Now</ActionButton>
            </HeroContent>
          </HeroSection>

          <CategorySection>
            <CategoryTitle>Categorias</CategoryTitle>
            <CategoryList>
              <CategoryItem>
                <CategoryItemIcon>
                  <FaHamburger size={24} />
                </CategoryItemIcon>
                <span>Burger</span>
              </CategoryItem>
              <CategoryItem>
                <CategoryItemIcon>
                  <FaPizzaSlice size={24} />
                </CategoryItemIcon>
                <span>Pizza</span>
              </CategoryItem>
              <CategoryItem>
                <CategoryItemIcon>
                  <FaDrumstickBite size={24} />
                </CategoryItemIcon>
                <span>Frango</span>
              </CategoryItem>
              <CategoryItem>
                <CategoryItemIcon>
                  <IoFastFood size={24} />
                </CategoryItemIcon>
                <span>Mais</span>
              </CategoryItem>
            </CategoryList>
          </CategorySection>

          <PopularItemsSection>
            <PopularItemsHeader>
              <h2>Popular items</h2>
              <SeeAllLink>See all</SeeAllLink>
            </PopularItemsHeader>
            
            <ItemsGrid>
              <ItemCard>
                <ItemImage>
                  <img
                    src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
                    alt="Beef Burger"
                  />
                </ItemImage>
                <ItemInfo>
                  <ItemName>Beef Burger</ItemName>
                  <ItemDetail>Cheesey, Delicious</ItemDetail>
                  <ItemPrice>$5.69</ItemPrice>
                </ItemInfo>
              </ItemCard>

              <ItemCard>
                <ItemImage>
                  <img
                    src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
                    alt="The Big Bite"
                  />
                </ItemImage>
                <ItemInfo>
                  <ItemName>The Big Bite</ItemName>
                  <ItemDetail>Cheesey, Delicious</ItemDetail>
                  <ItemPrice>$8.00</ItemPrice>
                </ItemInfo>
              </ItemCard>

              <ItemCard>
                <ItemImage>
                  <img
                    src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
                    alt="Smoky BBQ Beast"
                  />
                </ItemImage>
                <ItemInfo>
                  <ItemName>Smoky BBQ Beast</ItemName>
                  <ItemDetail>Cheesey, Delicious</ItemDetail>
                  <ItemPrice>$7.89</ItemPrice>
                </ItemInfo>
              </ItemCard>

              <ItemCard>
                <ItemImage>
                  <img
                    src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
                    alt="Classic Deluxe"
                  />
                </ItemImage>
                <ItemInfo>
                  <ItemName>Classic Deluxe</ItemName>
                  <ItemDetail>Cheesey, Delicious</ItemDetail>
                  <ItemPrice>$6.50</ItemPrice>
                </ItemInfo>
              </ItemCard>
            </ItemsGrid>
          </PopularItemsSection>
        </MainContent>
      </Container>
    </Fragment>
  );
}
