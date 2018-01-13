import React from 'react';
import Responsive from 'react-responsive';

//#import './About.css';

var FontAwesome = require('react-fontawesome')



const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;


class About extends React.Component {
  renderDesktop(){
    return(
      <section style={{
          flexDirection: 'column',
          minHeight: this.props.minHeight,
          backgroundColor: '#e8e8ec'
        }} id="About" className="_desktop">

        <div className="md_width">
          <h3>About</h3>


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
          flexDirection: 'column',
          minHeight: this.props.minHeight,
          backgroundColor: '#e8e8ec'
        }} id="About" className="_tablet">
        <div className="md_width">
          <h3>About</h3>

        </div>
        </section>
      </Tablet>
      <Mobile>
      <section style={{
          flexDirection: 'column',
          minHeight: this.props.minHeight,
          backgroundColor: '#e8e8ec'
        }} id="About" className="_desktop">

        <div className="md_width">
          <h3>About</h3>
        </div>
      </section>
      </Mobile>
      <Default>
        {this.renderDesktop()}
      </Default>
    </div>)
  }
}

export default About;
