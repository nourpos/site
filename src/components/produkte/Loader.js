import React, {Component} from 'react';


const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;


var FontAwesome = require('react-fontawesome')

var einfachIcon = (<FontAwesome className="fa-thumbs-o-up" size="4x"/>)
var zuverlaessigIcon = (<FontAwesome className="fa-check" size="4x"/>)
var geringeKostenIcon = (<FontAwesome className="fa-pie-chart" size="4x"/>)

const loader = (res) => (
  return(
    <FontAwesome
    className='rocket'
    name='rocket'
    size='2x'
    spin
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />
  )
);

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
          let loadingElement = null;
          if (!this.props.loaded) {
              loadingElement = loader;
          }
          return (
              <div>
                  {loadingElement}
                  {this.props.children}
              </div>
          );
      }
}

export default Loader;
