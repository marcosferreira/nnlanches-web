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
