import React, {Component} from 'react';
import Responsive from 'react-responsive';

import './Home.css';
import mobileBasisRaspi from '../../img/mobileBasis.png';
import Features from './features/Features';
import Sprachen from '../../languages/Sprachen'

var FontAwesome = require('react-fontawesome')
const checkIcon = (<FontAwesome className="check" name="check" size="1x"/>)
const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;

var FontAwesome = require('react-fontawesome')
const downloadIcon = (<FontAwesome className="download_icon" name="download" size="1x"/>)

class Home extends React.Component {
  constructor(props){
    super(props)
    this.lang=Sprachen.getLanguage()
  }
  shouldComponentUpdate(){
    if (this.lang!==Sprachen.getLanguage()) {
      this.lang=Sprachen.getLanguage()
      return true
    }
    return false
  }
  desktopHome() {
    return (<section style={{
        height:'auto',
        backgroundColor: 'transparent',
        display:'flex',
        flexDirection:'column',
        textAlign:this.lang==='ar'?'right':'left',
        direction: this.lang==='ar'?'rtl':'ltr'
      }} id="home">
      <div className="about" style={{
         display: 'flex',
         flex:1,
         minHeight: '100vh',
       }}>
        <div className="about-wrapper">
          <div className="about-wrapper-tablet-row">
            <div className="col left" style={{
                flexDirection: 'column'
              }}>
              <div>
                <h1 style={{
                    color: 'white',
                    fontSize: 30
                  }}>{Sprachen.posSystems}</h1>
                <h3 style={{
                    color: 'white'
                  }}>{Sprachen.noContracts}</h3>
                  <p className="download"><a download="NourPos_Mobile" href="https://firebasestorage.googleapis.com/v0/b/nourpos-e2bee.appspot.com/o/Mobile_2018-07-13.03-52-11.apk?alt=media&token=45a1af0f-715a-4649-8449-3ff480436ef3">{Sprachen.download} Mobile {downloadIcon}</a></p>
                  <p className="download"><a download="NourPos_Basis" href="https://firebasestorage.googleapis.com/v0/b/nourpos-e2bee.appspot.com/o/Basis_2018-07-20.20-59-48.apk?alt=media&token=266e26ad-fb05-4b55-ad34-961642a34e12">{Sprachen.download} Basis {downloadIcon}</a></p>
              </div>
            </div>
            <div className="col right" style={{}}>
              <img className="img-mobile" src={mobileBasisRaspi} alt="NourPos"></img>
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
        flexDirection:'column',
        textAlign:this.lang==='ar'?'right':'left',
        direction: this.lang==='ar'?'rtl':'ltr'
      }} id="home">
      <div className="about" style={{
         display: 'flex',
         flex:1,
         minHeight: '100vh',
       }}>
        <div className="about-wrapper">
          <div className="about-wrapper-tablet-row">
            <div className="col left" style={{
                flexDirection: 'column'
              }}>
              <div >
                <h1 style={{
                    color: 'white',
                    fontSize: 30
                  }}>{Sprachen.posSystems}</h1>
                <h3 style={{
                    color: 'white'
                  }}>{Sprachen.noContracts}</h3>
                  <p className="download-tablet"><a download="NourPos_Mobile" href="https://firebasestorage.googleapis.com/v0/b/nourpos-e2bee.appspot.com/o/Mobile_2018-07-13.03-52-11.apk?alt=media&token=45a1af0f-715a-4649-8449-3ff480436ef3">{Sprachen.download} Mobile {downloadIcon}</a></p>
                  <p className="download-tablet"><a download="NourPos_Basis" href="https://firebasestorage.googleapis.com/v0/b/nourpos-e2bee.appspot.com/o/Basis_2018-07-10.01-21-44.apk?alt=media&token=8c2226cf-344e-4ce8-b2c5-a3acadf3553b">{Sprachen.download} Basis {downloadIcon}</a></p>
              </div>
            </div>
            <div className="col right" style={{}}>
              <img className="img-mobile" src={mobileBasisRaspi} alt="NourPos"></img>
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
        flexDirection:'column',
        textAlign:this.lang==='ar'?'right':'left',
        direction: this.lang==='ar'?'rtl':'ltr'
      }} id="home">
      <div className="about" style={{
        display: 'flex',
        flex:1,
        minHeight: '100vh',
        }}>
        <div className="about-wrapper about-wrapper-mobile">
          <div className="about-wrapper-mobile-row">
            <div className="col left" style={{
                flexDirection: 'column'
              }}>
              <div >
                <h1 style={{
                    color: 'white',
                    fontSize: 30
                  }}>{Sprachen.posSystems}</h1>
                <h3 style={{
                    color: 'white'
                  }}>{Sprachen.noContracts}</h3>

              </div>
            </div>
            <div className="col right" style={{display:'flex',flexDirection:'column'}}>
              <img className="img-mobile" src={mobileBasisRaspi} alt="NourPos"></img>
              <p className="download-mobile"><a download="NourPos_Mobile" href="https://firebasestorage.googleapis.com/v0/b/nourpos-e2bee.appspot.com/o/Mobile_2018-07-13.03-52-11.apk?alt=media&token=45a1af0f-715a-4649-8449-3ff480436ef3">{Sprachen.download} Mobile {downloadIcon}</a></p>
              <p className="download-mobile"><a download="NourPos_Basis" href="https://firebasestorage.googleapis.com/v0/b/nourpos-e2bee.appspot.com/o/Basis_2018-07-10.01-21-44.apk?alt=media&token=8c2226cf-344e-4ce8-b2c5-a3acadf3553b">{Sprachen.download} Basis {downloadIcon}</a></p>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </section>)
  }
  render() {
    return (
      <div>
        <Desktop>{this.desktopHome()}</Desktop>
        <Tablet>{this.tabletHome()}</Tablet>
        <Mobile>{this.mobileHome()}</Mobile>
      </div>)
  }
}

export default Home;
