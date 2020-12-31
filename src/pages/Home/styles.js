import styled from 'styled-components';


export const CardDetach = styled.div`
  width: 100%;
  height: 300px;
  margin: 10px 0;
  background-color: #FFF;
  border-radius: 8px;
  position: relative;

  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  background-color: rgba(20,20,20, 0.5);
  position: absolute;
  bottom: 0;
  color: #FFF;
  text-shadow: 2px 2px 2px #333;
`;


export const CardGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const CardGroupTitle = styled.h2`
  font-size: 1.4rem;
  color: #555;
  border-bottom: 1px solid #888;
  padding-bottom: 2px;
  margin-bottom: 5px;
`;

export const CardProduct = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background-color: #CCC;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #CCC;
`;

export const CardProductBody = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

export const CardProductFooter = styled.div`
  width: 100%;
  min-height: 80px;
  padding: 5px;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  p {
    font-size: 0.8rem;
  }
`;
