import { Fragment, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import Header from '../../components/Header';
import { Container } from '../../styles/GlobaStyles';
import {
  PageContainer,
  PageTitle,
  DrinkCategoriesWrapper,
  CategoryButton,
  DrinkGrid,
  DrinkCard,
  DrinkImageContainer,
  DrinkInfo,
  DrinkName,
  DrinkDescription,
  DrinkPrice,
  AddToCartButton
} from './styles';

const DRINK_CATEGORIES = [
  { id: 'all', name: 'Todas' },
  { id: 'soda', name: 'Refrigerantes' },
  { id: 'juices', name: 'Sucos' },
  { id: 'water', name: 'Água' },
  { id: 'beer', name: 'Cerveja' },
  { id: 'others', name: 'Outros' }
];

const DRINKS = [
  {
    id: 1,
    name: 'Coca-Cola 350ml',
    description: 'Refrigerante Coca-Cola em lata',
    price: 5.99,
    category: 'soda',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    name: 'Suco de Laranja 500ml',
    description: 'Suco natural de laranja',
    price: 8.50,
    category: 'juices',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 3,
    name: 'Água Mineral 500ml',
    description: 'Água mineral sem gás',
    price: 3.50,
    category: 'water',
    image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 4,
    name: 'Cerveja Heineken 330ml',
    description: 'Cerveja Heineken long neck',
    price: 9.90,
    category: 'beer',
    image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 5,
    name: 'Guaraná Antarctica 350ml',
    description: 'Refrigerante Guaraná Antarctica em lata',
    price: 5.50,
    category: 'soda',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 6,
    name: 'Suco de Abacaxi 500ml',
    description: 'Suco natural de abacaxi',
    price: 8.50,
    category: 'juices',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
];

export default function Drink() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDrinks = selectedCategory === 'all' 
    ? DRINKS 
    : DRINKS.filter(drink => drink.category === selectedCategory);

  return (
    <Fragment>
      <Header />
      <Container>
        <PageContainer>
          <PageTitle>Bebidas</PageTitle>
          
          <DrinkCategoriesWrapper>
            {DRINK_CATEGORIES.map(category => (
              <CategoryButton 
                key={category.id}
                active={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </CategoryButton>
            ))}
          </DrinkCategoriesWrapper>
          
          <DrinkGrid>
            {filteredDrinks.map(drink => (
              <DrinkCard key={drink.id}>
                <DrinkImageContainer>
                  <img src={drink.image} alt={drink.name} />
                </DrinkImageContainer>
                <DrinkInfo>
                  <DrinkName>{drink.name}</DrinkName>
                  <DrinkDescription>{drink.description}</DrinkDescription>
                  <DrinkPrice>
                    <span>R$ {drink.price.toFixed(2)}</span>
                    <AddToCartButton>
                      <FaShoppingCart size={16} />
                    </AddToCartButton>
                  </DrinkPrice>
                </DrinkInfo>
              </DrinkCard>
            ))}
          </DrinkGrid>
        </PageContainer>
      </Container>
    </Fragment>
  );
}
