import React, {Component} from 'react';
import Responsive from 'react-responsive';
import './Produkte.css';


import produkte from '../../img/produkte.png';
import mobile2 from '../../img/mobile2.png';
import basis from '../../img/basis.png';
import logo from '../../img/logo.png';
import raspi_left from '../../img/raspi_left.png';
import epson_right from '../../img/epson_right.png';
import rfid_reader_right from '../../img/rfid_reader_right.png';
import Carousel from './carousel/Carousel';
import Sprachen from '../../languages/Sprachen'
import LazyLoad from 'react-lazy-load';

const loader = (
  <span className="rotating"><img style={{width:'50px'}} src={logo}/></span>
);

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;

class Produkte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minHeight:'100vh',

    };
    this.lang=Sprachen.getLanguage()
  }

  shouldComponentUpdate(){
    if (this.lang!==Sprachen.getLanguage()) {
      this.lang=Sprachen.getLanguage()
      return true
    }
    return false
  }

  renderDesktop(){
    return(
      <section style={{
          minHeight: this.state.minHeight,
          flexDirection: 'column',
          textAlign:this.lang==='ar'?'right':'left',
          direction: this.lang==='ar'?'rtl':'ltr'
        }} id="produkte" className="_desktop">
        <div className="md_width">
          <h1>{Sprachen.nourPosHardwareBox}</h1>
          <h3 style={{
              color: 'gray'
            }}>{Sprachen.OneBox}</h3>
          <div className="produkte_col">
            <div className="produkte_col_row">
                <img src={produkte} alt={Sprachen.OneBox}/>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <img src={raspi_left} alt={Sprachen.nourPosServer}/>
            </div>
            <div className="produkte_col_row">
              <h2>{Sprachen.nourPosServer}</h2>
              <p>
                {Sprachen.nourPosServerText}
              </p>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <h2>{Sprachen.rfidReader}</h2>
              <p>
                {Sprachen.rfidReaderText}
              </p>
            </div>
            <div className="produkte_col_row">
              <img className="rfid_reader_right" src={rfid_reader_right} alt={Sprachen.rfidReader} />
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <img src={basis}  alt={Sprachen.basisTablet}/>
            </div>
            <div className="produkte_col_row">
              <h2>{Sprachen.basisTablet} </h2>
              <p>
                {Sprachen.basisTabletText}
              </p>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <h2>{Sprachen.mobileClient}</h2>
              <p>
                {Sprachen.mobileClientText}
              </p>
            </div>
            <div className="produkte_col_row">
              <img className="mobile2" src={mobile2} alt={Sprachen.mobileClient}/>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <img src={epson_right} alt={Sprachen.drucker} />
            </div>
            <div className="produkte_col_row">
              <h2>{Sprachen.drucker}</h2>
              <p>
                {Sprachen.druckerText}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel">
          <Carousel/>
        </div>

      </section>
    )
  }
  render() {
    return (<div>
      <Desktop>
        {this.renderDesktop()}
      </Desktop>
      <Tablet>
        <section style={{
            minHeight: '100vh',
            flexDirection: 'column',
            display: 'flex',
            textAlign:this.lang==='ar'?'right':'left',
            direction: this.lang==='ar'?'rtl':'ltr'
          }} id="produkte" className="_tablet">
          <div className="xs_width">
          <h1>{Sprachen.nourPosHardwareBox}</h1>
          <h3 style={{
              color: 'gray'
            }}>{Sprachen.OneBox}</h3>
          <div className="produkte_col">
            <div className="produkte_col_row">
                <img src={produkte} alt={Sprachen.OneBox}/>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <img src={raspi_left} alt={Sprachen.nourPosServer}/>
            </div>
            <div className="produkte_col_row">
              <h2>{Sprachen.nourPosServer}</h2>
              <p>
                {Sprachen.nourPosServerText}
              </p>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <h2>{Sprachen.rfidReader}</h2>
              <p>
                {Sprachen.rfidReaderText}
              </p>
            </div>
            <div className="produkte_col_row">

              <img className="rfid_reader_right" src={rfid_reader_right} alt={Sprachen.rfidReader} />

            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">

              <img src={basis}/>

            </div>
            <div className="produkte_col_row">
              <h2>{Sprachen.basisTablet} </h2>
              <p>
                {Sprachen.basisTabletText}
              </p>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <h2>{Sprachen.mobileClient}</h2>
              <p>
                {Sprachen.mobileClientText}
              </p>
            </div>
            <div className="produkte_col_row">

              <img className="mobile2" src={mobile2} alt={Sprachen.mobileClient}/>

            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">

              <img src={epson_right} alt={Sprachen.drucker}/>

            </div>
            <div className="produkte_col_row">
              <h2>{Sprachen.drucker}</h2>
              <p>
                {Sprachen.druckerText}
              </p>
            </div>
          </div>

          </div>
        </section>
      </Tablet>
      <Mobile>
        <section style={{
            minHeight: '100vh',
            flexDirection: 'column',
            textAlign:this.lang==='ar'?'right':'left',
            direction: this.lang==='ar'?'rtl':'ltr'
          }} id="produkte" className="_desktop">
          <div className="xs_width">
          <h1>{Sprachen.nourPosHardwareBox}</h1>
          <h3 style={{
              color: 'gray'
            }}>{Sprachen.OneBox}</h3>
          <div className="produkte_col produkte_col_mobile">
            <div className="produkte_col_row produkte_col_row_mobile">
                <img src={produkte} alt={Sprachen.OneBox}/>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
            <div className="produkte_col_row produkte_col_row_mobile">

            <h2>{Sprachen.nourPosServer}</h2>
              <img src={raspi_left} alt={Sprachen.nourPosServer}/>

            </div>
            <div className="produkte_col_row produkte_col_row_mobile">
              <p>
                {Sprachen.nourPosServerText}
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
          <div className="produkte_col_row produkte_col_row_mobile">

          <h2>{Sprachen.rfidReader}</h2>
          <img className="rfid_reader_right" src={rfid_reader_right} alt={Sprachen.rfidReader} />

          </div>
            <div className="produkte_col_row produkte_col_row_mobile">
              <p>
                {Sprachen.rfidReaderText}
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile ">
            <div className="produkte_col_row produkte_col_row_mobile">

            <h2>{Sprachen.basisTablet} </h2>
              <img src={basis}/>

            </div>
            <div className="produkte_col_row produkte_col_row_mobile">
              <p>
                {Sprachen.basisTabletText}
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
          <div className="produkte_col_row produkte_col_row_mobile">
          <h2>{Sprachen.mobileClient}</h2>

          <img className="mobile2" src={mobile2} alt={Sprachen.mobileClient}/>

          </div>
            <div className="produkte_col_row produkte_col_row_mobile">
              <p>
                {Sprachen.mobileClientText}
              </p>
            </div>
          </div>
          <div className="produkte_col pro produkte_col_mobile">
            <div className="produkte_col_row produkte_col_row_mobile">

            <h2>{Sprachen.drucker}</h2>
              <img src={epson_right} alt={Sprachen.drucker}/>

            </div>
            <div className="produkte_col_row produkte_col_row_mobile">
              <p>
                {Sprachen.druckerText}
              </p>
            </div>
          </div>

          </div>
        </section>
      </Mobile>
      <link async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </div>)
  }
}

export default Produkte;
