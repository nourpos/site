import React, {Component} from 'react';
import Responsive from 'react-responsive';

import {Form, Text} from 'react-form';
import './Features.css';
var FontAwesome = require('react-fontawesome')

var einfachIcon = (<FontAwesome className="fa-thumbs-o-up" size="4x"/>)
var zuverlaessigIcon = (<FontAwesome className="fa-check" size="4x"/>)
var geringeKostenIcon = (<FontAwesome className="fa-pie-chart" size="4x"/>)
const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>
      <Desktop>
        <div className="features" style={{
            minHeight: 350,
            justifyContent: 'center',
            display: 'flex'
          }}>
          <div style={{
              display: 'flex',
              width: '1170px',
              marginLeft: 'auto',
              marginRight: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h2>
            <div style={{
                display: 'flex'
              }}>
              <div className="md4" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  borderWidth:1
                }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    display: 'flex'
                  }}>
                  {geringeKostenIcon}
                </div>
                <p>Geringe Kosten</p>
                <p>Sparen Sie Geld und kaufen Sie sich Eis dafür :)</p>
              </div>
              <div className="md4" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    display: 'flex'
                  }}>
                  {einfachIcon}
                </div>
                <p>Einfache Bedienung</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              </div>
              <div className="md4" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    display: 'flex'
                  }}>
                  {zuverlaessigIcon}
                </div>
                <p>Zuverlässig</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <Tablet>
        <div className="features" style={{
            minHeight: 350,
            justifyContent: 'center',
            display: 'flex'
          }}>
          <div style={{
              display: 'flex',
              flex: 1,
              marginLeft: 'auto',
              marginRight: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h2>
            <div style={{
                display: 'flex'
              }}>
              <div className="md4" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    display: 'flex'
                  }}>
                  {geringeKostenIcon}
                </div>
                <p>Geringe Kosten</p>
                <p>Sparen Sie Geld und kaufen Sie sich Eis dafür :)</p>
              </div>
              <div className="md4" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    display: 'flex'
                  }}>
                  {einfachIcon}
                </div>
                <p>Einfach</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              </div>
              <div className="md4" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    display: 'flex'
                  }}>
                  {zuverlaessigIcon}
                </div>
                <p>Zuverlässig</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              </div>
            </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="features" style={{
            minHeight: 350,
            justifyContent: 'center',
            display: 'flex'
          }}>
          <div style={{
              display: 'flex',
              flex: 1,
              marginLeft: 'auto',
              marginRight: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h2>
            <div style={{
                display: 'flex',flexDirection:'column'
              }}>
              <div className="md0" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    display: 'flex'
                  }}>
                  {geringeKostenIcon}
                </div>
                <p>Geringe Kosten</p>
                <p>Sparen Sie Geld und kaufen Sie sich Eis dafür :)</p>
              </div>
              <div className="md0" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    display: 'flex'
                  }}>
                  {einfachIcon}
                </div>
                <p>Einfach</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              </div>
              <div className="md0" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '40px',
                    display: 'flex'
                  }}>
                  {zuverlaessigIcon}
                </div>
                <p>Zuverlässig</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </div>)
  }
}

export default Features;
