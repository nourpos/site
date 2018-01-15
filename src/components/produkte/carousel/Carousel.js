import React, {Component} from 'react';

import Slider from 'react-slick';
import './Carousel.css';

import Sprachen from '../../../languages/Sprachen'


import car1 from '../../../img/car1.png';

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
              <img src={car1} alt="Caroussel pic 1"/>
          </div>
          <link async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Slider>
    );
  }
}

export default Carousel;
