import React, {Component} from 'react';
import Responsive from 'react-responsive';
import  './Footer.css'

import Sprachen from '../../languages/Sprachen'

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;



class Footer extends Component {
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
  renderDesktop(){
    return(
      <section className="footer" style={{
          height: 300,
          backgroundColor: '#1d1d1d',
          justifyContent: 'center',
          display: 'flex',
          textAlign:this.lang==='ar'?'right':'left',
          direction: this.lang==='ar'?'rtl':'ltr'
        }}>
        <div className="md_width" style={{width:'100%'}}>
          <div style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'self-end'
            }}>
              <div>
                <h3>NourPos</h3>
                <ul>
                <li><a  onClick={()=>{
                  this.props.setPage('about')
                  }}>{Sprachen.aboutUs}</a></li>
                <li><a  onClick={()=>{
                    this.props.setPage('datenschutz')
                  }}>{Sprachen.datenschutz}</a></li>
                <li><a  onClick={()=>{
                    this.props.setPage('impressum')
                  }}>{Sprachen.impressum}</a></li>
                </ul>
                <p>{Sprachen.copyrights} 2018</p>
              </div>
          </div>
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
        <section className="footer" style={{
            height: 300,
            backgroundColor: '#1d1d1d',
            justifyContent: 'center',
            display: 'flex',
            textAlign:this.lang==='ar'?'right':'left',
            direction: this.lang==='ar'?'rtl':'ltr'
          }}>
          <div className="xs_width">
            <div style={{
                margin: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <h3>NourPos</h3>
              <ul>
              <li><a  onClick={()=>{
                this.props.setPage('about')
                }}>{Sprachen.aboutUs}</a></li>
              <li><a  onClick={()=>{
                  this.props.setPage('datenschutz')
                }}>{Sprachen.datenschutz}</a></li>
              <li><a  onClick={()=>{
                  this.props.setPage('impressum')
                }}>{Sprachen.impressum}</a></li>
              </ul>
              <p>{Sprachen.copyrights} 2018</p>
            </div>
          </div>
        </section>
      </Tablet>
      <Mobile>
        <section className="footer" style={{
            height: 300,
            backgroundColor: '#1d1d1d',
            justifyContent: 'center',
            display: 'flex',
            textAlign:this.lang==='ar'?'right':'left',
            direction: this.lang==='ar'?'rtl':'ltr'
          }}>
          <div style={{
              display: 'flex',
              width: '100%'
            }}>
            <div style={{
                margin: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <h3>NourPos</h3>
              <ul>
              <li><a  onClick={()=>{
                this.props.setPage('about')
                }}>{Sprachen.aboutUs}</a></li>
              <li><a  onClick={()=>{
                  this.props.setPage('datenschutz')
                }}>{Sprachen.datenschutz}</a></li>
              <li><a  onClick={()=>{
                  this.props.setPage('impressum')
                }}>{Sprachen.impressum}</a></li>
              </ul>
              <p>{Sprachen.copyrights} 2018</p>
            </div>
          </div>
        </section>
      </Mobile>
      <link async href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet' type='text/css' />
    </div>)
  }
}

export default Footer;
