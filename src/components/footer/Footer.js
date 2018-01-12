import React, {Component} from 'react';
import Responsive from 'react-responsive';
import  './Footer.css'

import Sprachen from '../../languages/Sprachen'

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDesktop(){
    return(
      <section className="footer" style={{
          height: 300,
          backgroundColor: '#1d1d1d',
          justifyContent: 'center',
          display: 'flex',
          textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
          direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
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
                  this.props.setPage('agb')
                  }}>{Sprachen.conditions}</a></li>
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
        <link async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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
            textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
            direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
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
                this.props.setPage('agb')
                }}>{Sprachen.conditions}</a></li>
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
          <link async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </section>
      </Tablet>
      <Mobile>
        <section className="footer" style={{
            height: 300,
            backgroundColor: '#1d1d1d',
            justifyContent: 'center',
            display: 'flex',
            textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
            direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
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
                this.props.setPage('agb')
                }}>{Sprachen.conditions}</a></li>
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
    </div>)
  }
}

export default Footer;
