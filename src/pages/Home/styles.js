import styled from 'styled-components';

export const CarouselStories = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 100%;
    list-style: none;

    overflow-y: auto;
    overflow-x: auto;
    scroll-behavior: smooth;

    display: flex;
    flex-direction: row;

    li {
      width: 60px;
      height: 60px;
      margin: 5px;
    }
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;

    border-radius: 30px;
    border: 2px solid #CCC;
  }
`;

export const CarouselButton = styled.button`
  padding: 5px;

  background-color: transparent;
  border: none;
`;
