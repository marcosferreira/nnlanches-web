import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Carousel, CarouselButton } from "./styles";

export default function CarouselStories() {
  return (
    <Carousel>
      <CarouselButton
        onClick={() => (document.getElementById("carousel").scrollLeft -= 300)}
      >
        <MdArrowBack />
      </CarouselButton>
      <ul id="carousel">
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="lanche"
          />
        </li>
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="lanche"
          />
        </li>
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="lanche"
          />
        </li>
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="lanche"
          />
        </li>
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="lanche"
          />
        </li>
      </ul>
      <CarouselButton
        onClick={() => (document.getElementById("carousel").scrollLeft += 300)}
      >
        <MdArrowForward />
      </CarouselButton>
    </Carousel>
  );
}
