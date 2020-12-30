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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const CardProduct = styled.div`
  width: 150px;
  height: 200px;
  margin: 5px;
  position: relative;
  overflow: hidden;
  background-color: #CCC;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #CCC;
`;

export const CardProductBody = styled.div`
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
`;

export const CardProductFooter = styled.div`
  width: 100%;
  height: 100px;
  padding: 5px;
  position: absolute;
  bottom: 0;
  background-color: #DDD;
  p {
    font-size: 0.8rem;
  }
`;
