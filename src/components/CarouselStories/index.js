import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaPlus } from 'react-icons/fa'
import { Carousel, CarouselButton } from "./styles";
import { colors } from "../../styles/designSystem";

export default function CarouselStories() {
  const scrollCarousel = (direction) => {
    const carousel = document.getElementById("carousel");
    const scrollAmount = direction === 'left' ? -300 : 300;
    carousel.scrollLeft += scrollAmount;
  };

  return (
    <Carousel>
      <CarouselButton
        onClick={() => scrollCarousel('left')}
        aria-label="Rolar para a esquerda"
      >
        <MdArrowBack size={20} color={colors.primary.contrastText} />
      </CarouselButton>
      <ul id="carousel">
        <li>
          <button aria-label="Adicionar story">
            <FaPlus size={20} color={colors.primary.contrastText} />
          </button>
        </li>
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="Hambúrguer artesanal com batatas fritas"
          />
        </li>
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="Hambúrguer artesanal com batatas fritas"
          />
        </li>
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="Hambúrguer artesanal com batatas fritas"
          />
        </li>
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="Hambúrguer artesanal com batatas fritas"
          />
        </li>
        <li>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/8c/2018/04/18/fast-food-lanche-1524056858988_v2_1183x887.jpg"
            alt="Hambúrguer artesanal com batatas fritas"
          />
        </li>
      </ul>
      <CarouselButton
        onClick={() => scrollCarousel('right')}
        aria-label="Rolar para a direita"
      >
        <MdArrowForward size={20} color={colors.primary.contrastText} />
      </CarouselButton>
    </Carousel>
  );
}
