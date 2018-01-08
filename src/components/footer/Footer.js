import React, {Component} from 'react';
import Responsive from 'react-responsive';

import {Form, Text} from 'react-form';
import './Footer.css';

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (<div>
      <Desktop>
        <section className="footer" style={{
            height: 300,
            backgroundColor: '#1d1d1d',
            justifyContent: 'center',
            display: 'flex'
          }}>
          <div className="md_width">
            <div style={{
                margin: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <h3>NourPos</h3>
              <ul>
                <li>Über uns</li>
                <li>AGB</li>
                <li>Datenschutz</li>
                <li>Impressum</li>
              </ul>
              <p>Copyrights 2018</p>
            </div>
          </div>
        </section>
      </Desktop>
      <Tablet>
        <section className="footer" style={{
            height: 300,
            backgroundColor: '#1d1d1d',
            justifyContent: 'center',
            display: 'flex'
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
                <li>Über uns</li>
                <li>AGB</li>
                <li>Datenschutz</li>
                <li>Impressum</li>
              </ul>
              <p>Copyrights 2018</p>
            </div>
          </div>
        </section>
      </Tablet>
      <Mobile>
        <section className="footer" style={{
            height: 300,
            backgroundColor: '#1d1d1d',
            justifyContent: 'center',
            display: 'flex'
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
                <li>Über uns</li>
                <li>AGB</li>
                <li>Datenschutz</li>
                <li>Impressum</li>
              </ul>
              <p>Copyrights 2018</p>
            </div>
          </div>
        </section>
      </Mobile>
    </div>)
  }
}

export default Footer;
