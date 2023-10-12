import React from 'react';
import '../style/Caroucel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from '../images/1.jpg';
import SecondImage from '../images/2.jpg';
import ThirdImage from '../images/3.jpg';

function CarouselMainPage() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={FirstImage} alt="First slide" />
        <Carousel.Caption>
          <p>Монумент "Мужество". Брестская крепость, г. Брест</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SecondImage} alt="Second slide" />
        <Carousel.Caption>
          <p>Обелиск. Площадь победы, г.Минск</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ThirdImage} alt="Third slide" />
        <Carousel.Caption>
          <p>
            Памятник У-краткой (единственной в мире), г. Полоцк
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselMainPage;
