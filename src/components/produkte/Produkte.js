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
const Default = props => <Responsive {...props} minWidth={768}/>;

class Produkte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minHeight:this.props.minHeight,
      lang:Sprachen.getLanguage()
    };
  }


shouldComponentUpdate(nextProps, nextState){
    return nextProps.minHeight!== this.state.minHeight || Sprachen.getLanguage()!==this.state.lang
  }
  renderDesktop(){
    return(
      <section style={{
          minHeight: this.state.minHeight,
          flexDirection: 'column',
          textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
          direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
        }} id="produkte" className="_desktop">
        <div className="md_width">
          <h1>{Sprachen.nourPosHardwareBox}</h1>
          <h3 style={{
              color: 'gray'
            }}>{Sprachen.OneBox}</h3>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <div className="produkte_col_row">
                <LazyLoad offset={400} debounce={false}>
                <img src={produkte} alt={Sprachen.OneBox}/>
                </LazyLoad>
                {loader}
              </div>
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">

              <LazyLoad offset={400} debounce={false}>
              <img src={raspi_left} alt={Sprachen.nourPosServer}/>
              </LazyLoad>
              {loader}
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

              <LazyLoad offset={400} debounce={false}>
              <img className="rfid_reader_right" src={rfid_reader_right} alt={Sprachen.rfidReader} />
              </LazyLoad>
              {loader}
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">

              <LazyLoad offset={400} debounce={false}>
              <img src={basis}  alt={Sprachen.basisTablet}/>
              </LazyLoad>
              {loader}
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

              <LazyLoad offset={400} debounce={false}>
              <img className="mobile2" src={mobile2} alt={Sprachen.mobileClient}/>
              </LazyLoad>
              {loader}
            </div>
          </div>
          <div className="produkte_col">
            <div className="produkte_col_row">

              <LazyLoad offset={400} debounce={false}>
              <img src={epson_right} alt={Sprachen.drucker} />
              </LazyLoad>
              {loader}
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
          <Carousel></Carousel>
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
            minHeight: this.props.minHeight,
            flexDirection: 'column',
            display: 'flex',
            textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
            direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
          }} id="produkte" className="_tablet">
          <div className="xs_width">
          <h1>{Sprachen.NourPosHardwareBox}</h1>
          <h3 style={{
              color: 'gray'
            }}>{Sprachen.OneBox}</h3>
          <div className="produkte_col">
            <div className="produkte_col_row">
              <div className="produkte_col_row">
                <img src={produkte} alt={Sprachen.OneBox}/>

              </div>
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
            minHeight: this.props.minHeight,
            flexDirection: 'column',
            textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
            direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
          }} id="produkte" className="_desktop">
          <div className="xs_width">
          <h1>{Sprachen.NourPosHardwareBox}</h1>
          <h3 style={{
              color: 'gray'
            }}>{Sprachen.OneBox}</h3>
          <div className="produkte_col produkte_col_mobile">
            <div className="produkte_col_row">
              <div className="produkte_col_row">
                <img src={produkte} alt={Sprachen.OneBox}/>

              </div>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
            <div className="produkte_col_row">

            <h2>{Sprachen.nourPosServer}</h2>
              <img src={raspi_left} alt={Sprachen.nourPosServer}/>

            </div>
            <div className="produkte_col_row">
              <p>
                {Sprachen.nourPosServerText}
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
          <div className="produkte_col_row">

          <h2>{Sprachen.rfidReader}</h2>
          <img className="rfid_reader_right" src={rfid_reader_right} alt={Sprachen.rfidReader} />

          </div>
            <div className="produkte_col_row">
              <p>
                {Sprachen.rfidReaderText}
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile ">
            <div className="produkte_col_row">

            <h2>{Sprachen.basisTablet} </h2>
              <img src={basis}/>

            </div>
            <div className="produkte_col_row">
              <p>
                {Sprachen.basisTabletText}
              </p>
            </div>
          </div>
          <div className="produkte_col produkte_col_mobile">
          <div className="produkte_col_row">
          <h2>{Sprachen.mobileClient}</h2>

          <img className="mobile2" src={mobile2} alt={Sprachen.mobileClient}/>

          </div>
            <div className="produkte_col_row">
              <p>
                {Sprachen.mobileClientText}
              </p>
            </div>
          </div>
          <div className="produkte_col pro produkte_col_mobile">
            <div className="produkte_col_row">

            <h2>{Sprachen.drucker}</h2>
              <img src={epson_right} alt={Sprachen.drucker}/>

            </div>
            <div className="produkte_col_row">
              <p>
                {Sprachen.druckerText}
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
