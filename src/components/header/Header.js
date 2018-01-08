import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy'
import Responsive from 'react-responsive';
import './Header.css';
import logo from '../../img/logo.png';
import createHistory from 'history/createBrowserHistory'
var FontAwesome = require('react-fontawesome')

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

  }

  desktopHeader() {
    return (<header className={this.props.headerFixedAtTheTop
        ? "App-header-at-top desktop"
        : "App-header desktop"}>
      <a className="navbar-brand" href="#" style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <span className="logo">
          <img className="img-logo" src={logo} alt="Logo"></img>
        </span>
        <span className="text">
          NourPos
        </span>
      </a>
      <div >
        <Scrollspy offset={0} items={['home', 'produkte', 'functionen', 'preise', 'kontakt']} currentClassName="is-current">
          <li>
            <a href="#home">ÜBER UNS</a>
          </li>
          <li>
            <a href="#produkte">PRODUKTE</a>
          </li>
          <li>
            <a href="#functionen">FUNCTIONEN</a>
          </li>
          <li>
            <a href="#preise">PREISE</a>
          </li>
          <li>
            <a href="#kontakt">KONTAKT</a>
          </li>
        </Scrollspy>
      </div>
    </header>)
  }

  tabletHeader() {
    return (<header className={this.props.headerFixedAtTheTop
        ? "App-header-at-top desktop"
        : "App-header desktop"}>
      <a className="navbar-brand" href="#" style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <span className="logo">
          <img className="img-logo" src={logo} alt="Logo"></img>
        </span>
        <span className="text">
          NourPos
        </span>
      </a>
      <div >
        <Scrollspy offset={0} items={['home', 'produkte', 'functionen', 'preise', 'kontakt']} currentClassName="is-current">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#produkte">PRODUKTE</a>
          </li>
          <li>
            <a href="#functionen">FUNCTIONEN</a>
          </li>
          <li>
            <a href="#preise">PREISE</a>
          </li>
          <li>
            <a href="#kontakt">KONTAKT</a>
          </li>
        </Scrollspy>
      </div>
    </header>)
  }

  toogleMenu() {
    console.log('Desktop', Desktop);
    console.log('Mobile', Mobile);
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  closeMenu() {
    if (this.state.menuOpen) {
      this.setState({menuOpen: false})
    }
  }

  mobileHeader() {
    return (<header className="mobile">
      <a className="navbar-brand" href="#" style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <span className="logo">
          <img className="img-logo" src={logo} alt="Logo"></img>
        </span>
        <span className="text">
          NourPos
        </span>
      </a>
      <span style={{
          position: 'absolute',
          right: 10,
          top: 10,
          margin: 0,
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }} onClick={this.toogleMenu.bind(this)}>
        {
          this.state.menuOpen
            ? (<FontAwesome className="super-crazy-colors" name="remove" size="2x"/>)
            : (<FontAwesome className="super-crazy-colors" name="bars" size="2x"/>)
        }
      </span>
      <div className={`spy ${this.state.menuOpen
          ? "open"
          : 'close'}`}>
        <Scrollspy offset={0} items={['home', 'produkte', 'functionen', 'preise', 'kontakt']} currentClassName="is-current" onUpdate={()=>{this.closeMenu()} }>
          <li>
            <a href="#home">ÜBER UNS</a>
          </li>
          <li>
            <a href="#produkte">PRODUKTE</a>
          </li>
          <li>
            <a href="#functionen">FUNCTIONEN</a>
          </li>
          <li>
            <a href="#preise">PREISE</a>
          </li>
          <li>
            <a href="#kontakt">KONTAKT</a>
          </li>
        </Scrollspy>
      </div>
    </header>)
  }

  render() {
    return (<div>
      <Desktop>{this.desktopHeader()}</Desktop>
      <Tablet>{this.tabletHeader()}</Tablet>
      <Mobile>{this.mobileHeader()}</Mobile>
    </div>)
  }

}

export default Header;
