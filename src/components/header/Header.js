import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy'
import Responsive from 'react-responsive';
import './Header.css';
import logo from '../../img/logo.png';
import Sprachen from '../../languages/Sprachen'

var FontAwesome = require('react-fontawesome')
const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.SprachenObj={
      'ar':'العربية',
      'en':'English',
      'de':'Deutsch',
      'fr':"Français"
    }
    this.toggle = this.toggle.bind(this);
    this.onClickAction = this.onClickAction.bind(this);
    this.state = {
      dropdownOpen: false,
      language:this.SprachenObj[this.props.getLanguage()]
    };
  }

  onClickAction(lang){
    this.props.setLanguage(lang)
    this.setState({language:this.SprachenObj[lang],dropdownOpen:!this.state.dropdownOpen})
    this.toggle()
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (

      <div  className={`dropdown Dropdown-${this.props.breakpoint}`}>
      <button onClick={()=>{this.toggle()}}>
          {this.state.language}</button>
        <ul style={{display:this.state.dropdownOpen?'block':'none',left:Sprachen.getLanguage()==='ar'?'auto':'0',right:Sprachen.getLanguage()==='ar'?'0':'auto'}}>
          <li onClick={()=>{this.onClickAction('en')}} >English</li>
          <li onClick={()=>{this.onClickAction('de')}}  >Deutsch</li>
          <li onClick={()=>{this.onClickAction('fr')}} >Français</li>
          <li onClick={()=>{this.onClickAction('ar')}} >العربية</li>
        </ul>
      </div>

    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

  }
  componentDidMount(){

  }

  componentWillReceiveProps(){
    console.log('wwwwwww');
    if (this.anchor && this.props.othersPagesLoaded) {
      this.anchor.click()
      this.anchor=null
    }
  }

  goToHome(ref){
    console.log('click');
    if (!this.props.othersPagesLoaded) {
      this.anchor=ref
    }

    this.props.setPage('home')
  }

  desktopHeader() {
    return (<header  className={this.props.headerFixedAtTheTop
        ? "App-header-at-top desktop"
        : "App-header desktop"} style={{direction:Sprachen.getLanguage()==='ar'?'rtl':'ltr'}}>

      <a onClick={()=>{this.goToHome()}} className="navbar-brand" href="#" style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          direction:'ltr'
        }}>
        <span className="logo">
          <img className="img-logo" src={logo} alt="Logo"></img>
        </span>
        <span className="text">
          NourPos
        </span>
      </a>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
      <span>
        <DropdownComponent getLanguage={this.props.getLanguage} setLanguage={this.props.setLanguage}></DropdownComponent>
      </span>
      <span style={{width:'20px'}}></span>
        <Scrollspy style={{display:'flex',direction:Sprachen.getLanguage()==='ar'?'rtl':'ltr'}} offset={0} items={['home', 'produkte', 'functionen', 'preise', 'kontakt']} currentClassName="is-current" onUpdate={()=>{this.onPageUpdate()}}>
          <li>
            <a onClick={()=>{this.goToHome()}} href="#home">{Sprachen.home}</a>
          </li>
          <li>
            <a  onClick={()=>{this.goToHome()}} href="#produkte">{Sprachen.products}</a>
          </li>
          <li>
            <a  onClick={()=>{this.goToHome()}} href="#functionen">{Sprachen.functions}</a>
          </li>
          <li>
            <a  onClick={()=>{this.goToHome()}} href="#preise">{Sprachen.prices}</a>
          </li>
          <li>
            <a  onClick={()=>{this.goToHome()}} href="#kontakt">{Sprachen.contact}</a>
          </li>
        </Scrollspy>
      </div>
    </header>)
  }

  tabletHeader() {
    return (<header className={this.props.headerFixedAtTheTop
        ? "App-header-at-top desktop"
        : "App-header desktop"} style={{direction:Sprachen.getLanguage()==='ar'?'rtl':'ltr'}}>
      <a onClick={()=>{this.goToHome()}} className="navbar-brand" href="#" style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          direction:'ltr'
        }}>
        <span className="logo">
          <img className="img-logo" src={logo} alt="Logo"></img>
        </span>
        <span className="text">
          NourPos
        </span>
      </a>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
        <span>
          <DropdownComponent getLanguage={this.props.getLanguage} setLanguage={this.props.setLanguage}></DropdownComponent>
        </span>
        <span style={{width:'20px'}}></span>
        <Scrollspy style={{display:'flex',direction:Sprachen.getLanguage()==='ar'?'rtl':'ltr'}} offset={0} items={['home', 'produkte', 'functionen', 'preise', 'kontakt']} currentClassName="is-current" onUpdate={()=>{this.onPageUpdate()}}>
        <li>
          <a onClick={()=>{this.goToHome()}} href="#home">{Sprachen.home}</a>
        </li>
        <li>
          <a  onClick={()=>{this.goToHome()}} href="#produkte">{Sprachen.products}</a>
        </li>
        <li>
          <a  onClick={()=>{this.goToHome()}} href="#functionen">{Sprachen.functions}</a>
        </li>
        <li>
          <a  onClick={()=>{this.goToHome()}} href="#preise">{Sprachen.prices}</a>
        </li>
        <li>
          <a  onClick={()=>{this.goToHome()}} href="#kontakt">{Sprachen.contact}</a>
        </li>
        </Scrollspy>
      </div>
    </header>)
  }

  toogleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  onPageUpdate() {
      this.setState({menuOpen: false})
  }

  mobileHeader() {
    return (<header className="mobile" >
      <a onClick={()=>{this.goToHome()}} className="navbar-brand" href="#" style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          direction:'ltr'
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
          right: 55,
          top: 8,
          margin: 0,
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          display:'flex',
          width:34,
          height:34,
          backgroundColor:'tomato',
          borderRadius:17
        }}>
          <a href="tel:1-562-867-5309"></a>
      </span>
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
          : 'close'}`} style={{direction:Sprachen.getLanguage()==='ar'?'rtl':'ltr'}}>


          <DropdownComponent breakpoint={"mobile"} getLanguage={this.props.getLanguage} setLanguage={this.props.setLanguage}></DropdownComponent>

        <Scrollspy style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}} offset={0} items={['home', 'produkte', 'functionen', 'preise', 'kontakt']} currentClassName="is-current" onUpdate={()=>{this.onPageUpdate()}}>
        <li>
          <a onClick={()=>{this.goToHome()}} href="#home">{Sprachen.home}</a>
        </li>
        <li>
          <a  onClick={()=>{this.goToHome()}} href="#produkte">{Sprachen.products}</a>
        </li>
        <li>
          <a  onClick={()=>{this.goToHome()}} href="#functionen">{Sprachen.functions}</a>
        </li>
        <li>
          <a  onClick={()=>{this.goToHome()}} href="#preise">{Sprachen.prices}</a>
        </li>
        <li>
          <a  onClick={()=>{this.goToHome()}} href="#kontakt">{Sprachen.contact}</a>
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
