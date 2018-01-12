import React, {Component} from 'react';

import Slider from 'react-slick';
import './Carousel.css';

import Sprachen from '../../../languages/Sprachen'
import logo from '../../../img/logo.png';

import LazyLoad from 'react-lazy-load';



import car1 from '../../../img/car1.png';
import car6 from '../../../img/car6.jpg';

const loader = (
  <span className="rotating"><img style={{width:'50px'}} src={logo}/></span>
);
const _car1 = (
  <LazyLoad  offset={1}>
    <img src={car1} alt="Caroussel pic 1"/>
  </LazyLoad>
)
class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      autoplaySpeed:4500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      autoplay:true,
      easing :'ease-in-out'
    };
    return (
      <Slider  {...settings}>
          <div className="carousel-list-item">
            <div className="TextBox blueTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <div className="TextBox whiteTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <LazyLoad  offset={400} debounce={false}>
              <img src={car1} alt="Caroussel pic 1"/>
            </LazyLoad>
          </div>

          <div className="carousel-list-item">
            <div className="TextBox blueTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <div className="TextBox whiteTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <LazyLoad  offset={400} debounce={false}>
              <img src={car6} alt="Caroussel pic 6"/>
            </LazyLoad>
          </div>


      </Slider>
    );
  }
}

export default Carousel;
