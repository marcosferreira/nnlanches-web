import { Fragment } from "react";

import Header from "../../components/Header";
import CarouselStories from "../../components/CarouselStories";
import { Container } from "../../styles/GlobaStyles";

import { CardDetach, CardFooter } from "./styles";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Container>
        <CarouselStories />

        <CardDetach>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="lanche"
          />
          <CardFooter>
            <h1>Promoção</h1>
            <p>
              Somente hoje, você compra um X-Burguer e ganha um suco com batata frita, tudo pela mentade do preço.
            </p>
          </CardFooter>
        </CardDetach>
      </Container>
    </Fragment>
  );
}
