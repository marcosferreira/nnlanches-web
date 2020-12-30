import styled from "styled-components";

export const Carousel = styled.div`
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

      button {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #fec024;

        &:active {
          background-color: #ffd15c;
        }
      }
    }
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;

    border-radius: 30px;
    border: 2px solid #ccc;
  }
`;

export const CarouselButton = styled.button`
  padding: 5px;

  background-color: transparent;
  border: none;
`;
