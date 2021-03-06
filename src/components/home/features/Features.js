import React, {Component} from 'react';
import Responsive from 'react-responsive';

import './Features.css';
import Sprachen from '../../../languages/Sprachen'
var FontAwesome = require('react-fontawesome')

var einfachIcon = (<FontAwesome className="fa-thumbs-o-up" size="4x"/>)
var zuverlaessigIcon = (<FontAwesome className="fa-server" size="4x"/>)
var geringeKostenIcon = (<FontAwesome className="fa-pie-chart" size="4x"/>)

var einfachIconMobile = (<FontAwesome className="fa-thumbs-o-up" size="2x"/>)
var zuverlaessigIconMobile = (<FontAwesome className="fa-server" size="2x"/>)
var geringeKostenIconMobile = (<FontAwesome className="fa-pie-chart" size="2x"/>)



const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;

class Features extends Component {
  constructor(props) {
    super(props);
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
      <div className="features" style={{
          minHeight: 350,

          display: 'flex'
        }}>
        <div style={{
            display: 'flex',
            width: '1170px',
            marginLeft: 'auto',
            marginRight: 'auto',

            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <h2>{Sprachen.featuresText}</h2>
          <div style={{
              display: 'flex'
            }}>
            <div className="md4" style={{
                display: 'flex',

                alignItems: 'center',
                flexDirection: 'column',
                borderWidth:1
              }}>
              <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'white',

                  alignItems: 'center',
                  borderRadius: '40px',
                  display: 'flex'
                }}>
                {geringeKostenIcon}
              </div>
              <p className="first-p">{Sprachen.lowCost}</p>
              <p>{Sprachen.lowCostText} </p>
            </div>
            <div className="md4" style={{
                display: 'flex',

                alignItems: 'center',
                flexDirection: 'column'
              }}>
              <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'white',

                  alignItems: 'center',
                  borderRadius: '40px',
                  display: 'flex'
                }}>
                {einfachIcon}
              </div>
              <p className="first-p">{Sprachen.easyHandling}</p>
              <p>{Sprachen.easyHandlingText}</p>
            </div>
            <div className="md4" style={{
                display: 'flex',

                alignItems: 'center',
                flexDirection: 'column'
              }}>
              <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'white',

                  alignItems: 'center',
                  borderRadius: '40px',
                  display: 'flex'
                }}>
                {zuverlaessigIcon}
              </div>
              <p className="first-p">{Sprachen.reliable}</p>
              <p>{Sprachen.reliableText}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (<div>
      <Desktop>
        {this.renderDesktop()}
      </Desktop>
      <Tablet>
        {this.renderDesktop()}
      </Tablet>
      <Mobile>
        <div className="features" style={{
            minHeight: 350,

            display: 'flex'
          }}>
          <div style={{
              display: 'flex',
              flex: 1,
              marginLeft: 'auto',
              marginRight: 'auto',

              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <h2>{Sprachen.featuresText}</h2>
            <div style={{
                display: 'flex',flexDirection:'column'
              }}>
              <div className="md0" style={{
                  display: 'flex',

                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: 'white',

                    alignItems: 'center',
                    borderRadius: '45px',
                    display: 'flex'
                  }}>
                  {geringeKostenIconMobile}
                </div>
                <p className="first-p">{Sprachen.lowCost}</p>
                <p>{Sprachen.lowCostText} </p>
              </div>
              <div className="md0" style={{
                  display: 'flex',

                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: 'white',

                    alignItems: 'center',
                    borderRadius: '45px',
                    display: 'flex'
                  }}>
                  {einfachIconMobile}
                </div>
                <p className="first-p">{Sprachen.easyHandling}</p>
                <p>{Sprachen.easyHandlingText}</p>
              </div>
              <div className="md0" style={{
                  display: 'flex',

                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: 'white',

                    alignItems: 'center',
                    borderRadius: '45px',
                    display: 'flex'
                  }}>
                  {zuverlaessigIconMobile}
                </div>
                <p className="first-p">{Sprachen.reliable}</p>
                <p>{Sprachen.reliableText}</p>
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </div>)
  }
}

export default Features;
