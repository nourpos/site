import React, {Component} from 'react';
import Responsive from 'react-responsive';

import AGBCss from './AGB.css';

var FontAwesome = require('react-fontawesome')
const checkIcon = (<FontAwesome className="check" name="check" size="1x"/>)



const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;


class AGB extends React.Component {
  render() {
    return (<div>
      <Desktop>
        <section style={{
            flexDirection: 'column',
            minHeight: this.props.minHeight,
            backgroundColor: '#e8e8ec'
          }} id="AGB" className="_desktop">

          <div className="md_width">
            <h3>AGB</h3>


          </div>
        </section>
      </Desktop>
      <Tablet>
        <section style={{
          flexDirection: 'column',
          minHeight: this.props.minHeight,
          backgroundColor: '#e8e8ec'
        }} id="AGB" className="_tablet">
        <div className="md_width">
          <h3>AGB</h3>

        </div>
        </section>
      </Tablet>
      <Mobile>
      <section style={{
          flexDirection: 'column',
          minHeight: this.props.minHeight,
          backgroundColor: '#e8e8ec'
        }} id="AGB" className="_desktop">

        <div className="md_width">
          <h3>AGB</h3>
        </div>
      </section>
      </Mobile>
    </div>)
  }
}

export default AGB;
