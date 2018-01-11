import React, {Component} from 'react';
import Responsive from 'react-responsive';
import MobileDetect from'mobile-detect';
import './App.css';
import PageCover from './components/pageCover/PageCover';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Produkte from './components/produkte/Produkte';
import Functionen from './components/functionen/Functionen';
import Preise from './components/preise/Preise';
import About from './components/about/About';
import AGB from './components/agb/AGB';
import Datenschutz from './components/datenschutz/Datenschutz';
import Impressum from './components/impressum/Impressum';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Sprachen from './languages/Sprachen'
import {reactLocalStorage} from 'reactjs-localstorage';

reactLocalStorage.set('lang', 'de');


const md = new MobileDetect(window.navigator.userAgent);


const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: '0',
      headerFixedAtTheTop: false,
      submittedValues: {},
      page:'home'
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this._setLanguage = this._setLanguage.bind(this);
    this._getLanguage = this._getLanguage.bind(this);

  }
  componentWillMount(){
    this._check_language()
  }

  componentDidMount() {
    this.updateWindowDimensions();
    md.mobile() ||  window.addEventListener('resize', this.updateWindowDimensions);
    md.mobile() || window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    md.mobile() ||  window.removeEventListener('resize', this.updateWindowDimensions);
    md.mobile() ||  window.removeEventListener('scroll', this.handleScroll);
  }
  _check_language(){
    let langFromSession = reactLocalStorage.get('lang');
    console.log('langFromSession',langFromSession);
    if(langFromSession){
      Sprachen.setLanguage(langFromSession)
    }else{
      Sprachen.setLanguage(Sprachen.getInterfaceLanguage())
    }
  }
  _setLanguage(lang){
    Sprachen.setLanguage(lang)
    console.log('lang',lang);
    reactLocalStorage.set('lang',lang);
    let langFromSession = reactLocalStorage.get('lang');
    console.log('langFromSession',langFromSession);
    this.setState({})//refresh page
  }
  _getLanguage(lang){
    return Sprachen.getLanguage()
  }
  handleScroll() {
    if (window.scrollY > 50) {
      if (!this.state.headerFixedAtTheTop) {
        this.setState({headerFixedAtTheTop: true})
      }
    } else {
      if (this.state.headerFixedAtTheTop) {
        this.setState({headerFixedAtTheTop: false})
      }
    }
  }

  updateWindowDimensions() {
    this.setState({windowHeight: window.innerHeight});
  }

  renderHome() {
    return (<div>
      <Desktop>{this.desktopHome()}</Desktop>
      <Tablet>{this.tabletHome()}</Tablet>
      <Mobile>{this.mobileHome()}</Mobile>
    </div>)
  }

  getHome(){
    return (
      <div>
        <Home minHeight={this.state.windowHeight}/>
        <Produkte minHeight={this.state.windowHeight}/>
        <Functionen minHeight={this.state.windowHeight} />
        <Preise minHeight={this.state.windowHeight} />
        <Contact minHeight={this.state.windowHeight}/>
      </div>
    )
  }

  getAbout(){
    return (
      <div>
        <About setPage={this.setPage.bind(this)} minHeight={this.state.windowHeight} />
      </div>
    )
  }
  getAGB(){
    return (
      <div>
        <AGB setPage={this.setPage.bind(this)} minHeight={this.state.windowHeight} />
      </div>
    )
  }
  getDatenschutz(){
    return (
      <div>
        <Datenschutz setPage={this.setPage.bind(this)} minHeight={this.state.windowHeight} />
      </div>
    )
  }
  getImpressum(){
    return (
      <div>
        <Impressum setPage={this.setPage.bind(this)} minHeight={this.state.windowHeight} />
      </div>
    )
  }
  setPage(page){
    this.state.page===page || console.log('nei');
    this.state.page===page || window.scrollTo( 0, 0 );
    this.state.page===page || this.setState({page:page})
  }

  getpage(){
    switch (this.state.page) {
      case 'home':
        return this.getHome()
        break;
      case 'about':
        return this.getAbout()
        break;
      case 'agb':
        return this.getAGB()
        break;
      case 'datenschutz':
        return this.getDatenschutz()
        break;
      case 'impressum':
        return this.getImpressum()
        break;
      default:

    }
  }

  render() {
    console.log('hmm');
    return (<div className="App">
      <PageCover/>
      <Header getLanguage={this._getLanguage} setLanguage={this._setLanguage} setPage={this.setPage.bind(this)}  headerFixedAtTheTop={this.state.headerFixedAtTheTop}/>
      {this.getpage()}
      <Footer setLanguage={this._setLanguage}  setPage={this.setPage.bind(this)}/>
    </div>);
  }
}

export default App;
