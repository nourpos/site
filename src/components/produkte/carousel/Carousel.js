import React, {Component} from 'react';

import Slider from 'react-slick';
import CarouselCss from './Carousel.css';

import car1 from '../../../img/car1.png';
import car2 from '../../../img/car2.png';
import car6 from '../../../img/car6.jpg';


class Carousel extends React.Component {
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
      <Slider {...settings}>
        <div>
          <div className="carousel-list-item">
            <div className="TextBox blueTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <div className="TextBox whiteTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <div className="TextBox orangeTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <img src={car1}/>
          </div>
        </div>
        <div>
          <div className="carousel-list-item">
            <div className="TextBox blueTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <div className="TextBox whiteTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <div className="TextBox orangeTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <img src={car2}/>
          </div>
        </div>
        <div>
          <div className="carousel-list-item">
            <div className="TextBox blueTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <div className="TextBox whiteTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <div className="TextBox orangeTextBox">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
            <img src={car6}/>
          </div>
        </div>

      </Slider>
    );
  }
}

export default Carousel;
