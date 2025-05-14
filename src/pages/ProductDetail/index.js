import { Fragment, useState } from "react";
import { FaStar, FaClock, FaFire, FaShoppingBag } from "react-icons/fa";
import { MdArrowBack, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { Container } from "../../styles/GlobaStyles";

import {
  ProductDetailContainer,
  TopActions,
  BackButton,
  ProductImage,
  ProductContent,
  LocationInfo,
  ProductTitle,
  RatingContainer,
  ProductInfoGrid,
  ProductInfoItem,
  ProductDescription,
  AddToCartButton,
  ProductCounter,
  CounterButton,
  CounterValue,
  TotalContainer,
} from "./styles";

export default function ProductDetail() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <ProductDetailContainer>
          <TopActions>
            <BackButton onClick={() => navigate(-1)}>
              <MdArrowBack size={24} />
            </BackButton>
            <FaShoppingBag size={24} />
          </TopActions>

          <ProductImage>
            <img
              src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
              alt="Smoky BBQ Beast"
            />
          </ProductImage>

          <ProductContent>
            <LocationInfo>
              <MdLocationOn size={16} />
              <span>Happy Valley</span>
            </LocationInfo>

            <ProductTitle>Smoky BBQ Beast</ProductTitle>

            <RatingContainer>
              <FaStar size={14} color="#FFD700" />
              <span>4.8</span>
              <span>(120 avaliações)</span>
            </RatingContainer>

            <ProductInfoGrid>
              <ProductInfoItem>
                <FaClock size={16} color="#757575" />
                <span>10+ mins</span>
              </ProductInfoItem>
              <ProductInfoItem>
                <FaFire size={16} color="#FF5722" />
                <span>5.0 min</span>
              </ProductInfoItem>
            </ProductInfoGrid>

            <ProductDescription>
              <h3>Descrição</h3>
              <p>
                O Smoky BBQ Beast é bold e suculento burger perfeito para os amantes de BBQ. 
                Com blend bovino grelhado em chamas, queijo cheddar, bacon crocante e molho 
                barbecue artesanal servido em um pão macio tostado.
              </p>
            </ProductDescription>

            <TotalContainer>
              <ProductCounter>
                <CounterButton onClick={handleDecrement}>-</CounterButton>
                <CounterValue>{quantity}</CounterValue>
                <CounterButton onClick={handleIncrement}>+</CounterButton>
              </ProductCounter>

              <AddToCartButton>
                Buy Now
              </AddToCartButton>
            </TotalContainer>
          </ProductContent>
        </ProductDetailContainer>
      </Container>
    </Fragment>
  );
}