import React, {Component} from 'react';
import Responsive from 'react-responsive';

import HomeCss from './Home.css';
import mobileBasisRaspi from '../../img/mobileBasis.png';
import Features from './features/Features';

var FontAwesome = require('react-fontawesome')
const checkIcon = (<FontAwesome className="check" name="check" size="1x"/>)



const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;


class Home extends React.Component {
  desktopHome() {
    return (<section style={{
        height:'auto',
        backgroundColor: 'transparent',
        display:'flex',
        flexDirection:'column'
      }} id="home">
      <div className="about" style={{
         display: 'flex',
         flex:1,
         minHeight: this.props.minHeight,
       }}>
        <div className="about-wrapper">
          <div className="row">
            <div className="col left" style={{
                flexDirection: 'column'
              }}>
              <div style={{
                  textAlign: 'left'
                }}>
                <h1 style={{
                    color: 'white',
                    fontSize: 30
                  }}>NourPos Kassensysteme</h1>
                <h3 style={{
                    color: 'white'
                  }}>Keine monatliche Gebühr, keine Verträge.</h3>
              </div>
            </div>
            <div className="col right" style={{}}>
              <img className="img-mobile" src={mobileBasisRaspi} alt="mobileLogo"></img>
            </div>
          </div>
        </div>
      </div>
      <Features   />
    </section>)
  }
  tabletHome() {
    return (<section style={{
        height:'auto',
        backgroundColor: 'transparent',
        display:'flex',
        flexDirection:'column'
      }} id="home">
      <div className="about" style={{
         display: 'flex',
         flex:1,
         minHeight: this.props.minHeight,
       }}>
        <div className="about-wrapper">
          <div className="row">
            <div className="col left" style={{
                flexDirection: 'column'
              }}>
              <div style={{
                  textAlign: 'left'
                }}>
                <h1 style={{
                    color: 'white',
                    fontSize: 30
                  }}>NourPos Kassensysteme</h1>
                <h3 style={{
                    color: 'white'
                  }}>Keine monatliche Gebühr, keine Verträge.</h3>
              </div>
            </div>
            <div className="col right" style={{}}>
              <img className="img-mobile" src={mobileBasisRaspi} alt="mobileLogo"></img>
            </div>
          </div>
        </div>
      </div>
      <Features   />
    </section>)
  }
  mobileHome() {
    return (<section style={{
        height:'auto',
        backgroundColor: 'transparent',
        display:'flex',
        flexDirection:'column'
      }} id="home">
      <div className="about" style={{
        display: 'flex',
        flex:1,
        minHeight: this.props.minHeight,
        }}>
        <div className="about-wrapper about-wrapper-mobile">
          <div className="row">
            <div className="col left" style={{
                flexDirection: 'column'
              }}>
              <div style={{
                  textAlign: 'left'
                }}>
                <h1 style={{
                    color: 'white',
                    fontSize: 30
                  }}>NourPos Kassensysteme</h1>
                <h3 style={{
                    color: 'white'
                  }}>Keine monatliche Gebühr, keine Verträge.</h3>
              </div>
            </div>
            <div className="col right" style={{}}>
              <img className="img-mobile" src={mobileBasisRaspi} alt="mobileLogo"></img>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </section>)
  }
  render() {
    return (<div>
      <Desktop>{this.desktopHome()}</Desktop>
      <Tablet>{this.tabletHome()}</Tablet>
      <Mobile>{this.mobileHome()}</Mobile>
    </div>)
  }
}

export default Home;
