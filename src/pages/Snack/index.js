import { Fragment, useState } from 'react';
import { FaShoppingCart, FaHamburger, FaPizzaSlice, FaHotdog, FaCheese } from 'react-icons/fa';
import { GiTacos, GiSandwich, GiFrenchFries } from 'react-icons/gi';

import Header from '../../components/Header';
import { Container } from '../../styles/GlobaStyles';
import {
  PageContainer,
  PageTitle,
  SnackCategoriesWrapper,
  CategoryButton,
  SnackGrid,
  SnackCard,
  SnackImageContainer,
  PromoTag,
  SnackInfo,
  SnackName,
  SnackDescription,
  SnackPrice,
  AddToCartButton,
  PromoBanner,
  PromoBannerContent,
  PromoButton
} from './styles';

const SNACK_CATEGORIES = [
  { id: 'all', name: 'Todos', icon: null },
  { id: 'burgers', name: 'Hambúrgueres', icon: FaHamburger },
  { id: 'pizzas', name: 'Pizzas', icon: FaPizzaSlice },
  { id: 'hotdogs', name: 'Cachorros-Quentes', icon: FaHotdog },
  { id: 'sandwiches', name: 'Sanduíches', icon: GiSandwich },
  { id: 'tacos', name: 'Tacos', icon: GiTacos },
  { id: 'sides', name: 'Acompanhamentos', icon: GiFrenchFries },
  { id: 'others', name: 'Outros', icon: FaCheese }
];

const SNACKS = [
  {
    id: 1,
    name: 'X-Tudo Especial',
    description: 'Hambúrguer artesanal, queijo, bacon, ovo, alface, tomate e molho especial',
    price: 25.90,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80',
    isPromo: true
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    description: 'Molho de tomate, queijo mozzarella e manjericão fresco',
    price: 39.90,
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=714&q=80',
    isPromo: false
  },
  {
    id: 3,
    name: 'Cachorro-Quente Completo',
    description: 'Salsicha, vinagrete, batata palha, milho, ervilha, queijo e molhos',
    price: 18.50,
    category: 'hotdogs',
    image: 'https://images.unsplash.com/photo-1612392166886-ee8475b03af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    isPromo: false
  },
  {
    id: 4,
    name: 'Sanduíche Natural',
    description: 'Pão integral, frango desfiado, cenoura, alface e molho caseiro',
    price: 16.90,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80',
    isPromo: false
  },
  {
    id: 5,
    name: 'Batatas Fritas Grande',
    description: 'Porção de batatas fritas crocantes com tempero especial',
    price: 15.90,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1576777647209-e8733d7b851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    isPromo: false
  },
  {
    id: 6,
    name: 'Combo Família',
    description: '4 hambúrgueres, 2 batatas grandes, 4 refrigerantes',
    price: 89.90,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    isPromo: true
  }
];

export default function Snack() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSnacks = selectedCategory === 'all' 
    ? SNACKS 
    : SNACKS.filter(snack => snack.category === selectedCategory);

  return (
    <Fragment>
      <Header />
      <Container>
        <PageContainer>
          <PageTitle>Lanches</PageTitle>

          <PromoBanner>
            <img 
              src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
              alt="Promoção especial de hambúrgueres"
            />
            <PromoBannerContent>
              <h2>Promoção da Semana</h2>
              <p>Compre qualquer hambúrguer e ganhe uma bebida grátis!</p>
              <PromoButton>Ver Detalhes</PromoButton>
            </PromoBannerContent>
          </PromoBanner>
          
          <SnackCategoriesWrapper>
            {SNACK_CATEGORIES.map(category => {
              const Icon = category.icon;
              return (
                <CategoryButton 
                  key={category.id}
                  active={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {Icon && <Icon size={16} style={{ marginRight: '6px' }} />}
                  {category.name}
                </CategoryButton>
              );
            })}
          </SnackCategoriesWrapper>
          
          <SnackGrid>
            {filteredSnacks.map(snack => (
              <SnackCard key={snack.id}>
                <SnackImageContainer>
                  {snack.isPromo && <PromoTag>Promoção</PromoTag>}
                  <img src={snack.image} alt={snack.name} />
                </SnackImageContainer>
                <SnackInfo>
                  <SnackName>{snack.name}</SnackName>
                  <SnackDescription>{snack.description}</SnackDescription>
                  <SnackPrice>
                    <span>R$ {snack.price.toFixed(2)}</span>
                    <AddToCartButton>
                      <FaShoppingCart size={16} />
                    </AddToCartButton>
                  </SnackPrice>
                </SnackInfo>
              </SnackCard>
            ))}
          </SnackGrid>
        </PageContainer>
      </Container>
    </Fragment>
  );
}
