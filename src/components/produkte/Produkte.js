import React, {Component} from 'react';
import Responsive from 'react-responsive';
import {Form, Text} from 'react-form';
import LazyLoad from 'react-lazy-load';
import './Produkte.css';
import produkte from '../../img/produkte.png';
import mobile2 from '../../img/mobile2.png';
import basis from '../../img/basis.png';
import logo from '../../img/logo.png';
import raspi_left from '../../img/raspi_left.png';
import epson_right from '../../img/epson_right.png';
import rfid_reader_right from '../../img/rfid_reader_right.png';
import Carousel from './carousel/Carousel';


var FontAwesome = require('react-fontawesome')


const loader = (
    <span className="rotating"><img style={{width:'50px'}} src={logo}/></span>
);

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;

class Produkte extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<div>
      <Desktop>
        <section style={{
            minHeight: this.props.minHeight,
            flexDirection: 'column'
          }} id="produkte" className="_desktop">
          <div className="md_width">
            <h1>NourPos Hardware-Box</h1>
            <h3 style={{color:'gray'}}>Eine Box, alles drin – Starten Sie direkt mit dem Bonieren</h3>
            <div className="produkte_col">
              <div className="produkte_col_row">
                <div className="produkte_col_row">
                  <img src={produkte}/>

                </div>
              </div>
            </div>
            <div className="produkte_col">
              <div className="produkte_col_row">

                  <img src={raspi_left}/>


              </div>
              <div className="produkte_col_row">
                <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
                </p>
              </div>
            </div>
            <div className="produkte_col">
              <div className="produkte_col_row">
                <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
                </p>
              </div>
              <div className="produkte_col_row">

              <img className="rfid_reader_right" src={rfid_reader_right}/>


              </div>
            </div>
            <div className="produkte_col">
            <div className="produkte_col_row">

            <img src={basis}/>


            </div>
              <div className="produkte_col_row">
                <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
                </p>
              </div>
            </div>
            <div className="produkte_col">
              <div className="produkte_col_row">
                <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
                </p>
              </div>
              <div className="produkte_col_row">

              <img className="mobile2" src={mobile2}/>


              </div>
            </div>
            <div className="produkte_col">
              <div className="produkte_col_row">

                  <img src={epson_right}/>


              </div>
              <div className="produkte_col_row">
                <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
                </p>
              </div>
            </div>

          </div>

        </section>
      </Desktop>
      <Tablet>
       <section style={{
          minHeight: this.props.minHeight,
          flexDirection: 'column',
          display:'flex'
        }} id="produkte" className="_tablet">
        <div className="xs_width">
          <h1>NourPos Hardware-Box</h1>
          <h3 style={{color:'gray'}}>Eine Box, alles drin – Starten Sie direkt mit dem Bonieren</h3>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <div className="produkte_col_row">

                  <img src={produkte}/>


              </div>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">

                <img src={raspi_left}/>


            </div>
            <div className="produkte_col_row">
              <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
            <div className="produkte_col_row">

            <img className="rfid_reader_right" src={rfid_reader_right}/>


            </div>
          </div>
          <div className="produkte_col">
          <div className="produkte_col_row">

          <img src={basis}/>


          </div>
            <div className="produkte_col_row">
              <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
            <div className="produkte_col_row">

            <img className="mobile2" src={mobile2}/>


            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">

                <img src={epson_right}/>


            </div>
            <div className="produkte_col_row">
              <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
          </div>

        </div>
       </section>
      </Tablet>
      <Mobile>
       <section style={{
          minHeight: this.props.minHeight,
          flexDirection: 'column'
        }} id="produkte" className="_desktop">
        <div className="xs_width">
          <h1>NourPos Hardware-Box</h1>
          <h3 style={{color:'gray'}}>Eine Box, alles drin – Starten Sie direkt mit dem Bonieren</h3>
          <div className="produkte_col produkte_col_mobile">
            <div className="produkte_col_row">
              <div className="produkte_col_row">

                  <img src={produkte}/>


              </div>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
            <div className="produkte_col_row">
            <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>

                <img src={raspi_left}/>


            </div>
            <div className="produkte_col_row">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
            <div className="produkte_col_row">
            <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>

            <img className="rfid_reader_right" src={rfid_reader_right}/>


            </div>
            <div className="produkte_col_row">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
          <div className="produkte_col_row">
          <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>

          <img src={basis}/>


          </div>
            <div className="produkte_col_row">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">

            <div className="produkte_col_row">
            <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>

            <img src={mobile2}/>


            </div>
            <div className="produkte_col_row">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
            <div className="produkte_col_row">
              <h2>Lorem ipsum dolor sit amet consetetur sadipscing.</h2>

                <img src={epson_right}/>


            </div>
            <div className="produkte_col_row">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, sadipscing dolor sit amet, consetetur sed diam nonumy eirmod tempor consetetur amet eirmod amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, eirmod sit consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolor sit amet, consetetur
              </p>
            </div>
          </div>

        </div>
        </section>
      </Mobile>
    </div>)
  }
}

export default Produkte;
