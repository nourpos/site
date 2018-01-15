import React, {Component} from 'react';
import Responsive from 'react-responsive';
import './App.css';
import PageCover from './components/pageCover/PageCover';
import Header from './components/header/Header';
import Home from './components/home/Home';

import Footer from './components/footer/Footer';
import Sprachen from './languages/Sprachen'
import {reactLocalStorage} from 'reactjs-localstorage';
import Loadable from 'react-loadable';
import config from './config.json'
var maintenance = config.maintenance

const Maintenance = Loadable({
  loader: () => import('./components/maintenance/Maintenance'),
  loading: () => (<div> Loading...</div>),
});


var othersPagesLoaded = false;
var allPagesToBeLoaded = 4;
var pagesLoaded = 0;
const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: '0',
      headerFixedAtTheTop: false,
      submittedValues: {},
      page:'home',
      load:false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this._setLanguage = this._setLanguage.bind(this);
    this._getLanguage = this._getLanguage.bind(this);
    this.incrmentLoadedPages = this.incrmentLoadedPages.bind(this);
    this.setPage = this.setPage.bind(this);
    this.savePageUntilOthersPagesLoaded=""

  }
  loadOtherPages(){
    this.About = Loadable({
      loader: () => import('./components/about/About'),
      loading: () => (<div> Loading...</div>),
    });
    this.AGB = Loadable({
      loader: () => import('./components/agb/AGB'),
      loading: () => (<div> Loading...</div>),
    });
    this.Datenschutz = Loadable({
      loader: () => import('./components/datenschutz/Datenschutz'),
      loading: () => (<div> Loading...</div>),
    });
    this.Impressum = Loadable({
      loader: () => import('./components/impressum/Impressum'),
      loading: () => (<div> Loading...</div>),
    });
  }
  loadOtherPagesForStart(){
    if (othersPagesLoaded) {
      return
    }
    this.Produkte = Loadable({
      loader: () => import('./components/produkte/Produkte'),
      loading: () => (<div style={{height:'1vl'}}> Loading...</div>),
    });
    this.Functionen = Loadable({
      loader: () => import('./components/functionen/Functionen'),
      loading: () => (<div> Loading...</div>),
    });
    this.Preise = Loadable({
      loader: () => import('./components/preise/Preise'),
      loading: () => (<div> Loading...</div>),
    });
    this.Contact = Loadable({
      loader: () => import('./components/contact/Contact'),
      loading: () => (<div> Loading...</div>),
    });
    othersPagesLoaded=true
    this.setState({})

  }
  componentWillMount(){
    this._check_language()
  }

  componentDidMount() {
    this.updateWindowDimensions();
     window.addEventListener('resize', this.updateWindowDimensions);
     window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
      window.removeEventListener('scroll', this.handleScroll);
  }
  _check_language(){
    let langFromSession = reactLocalStorage.get('lang');
    if(langFromSession){
      Sprachen.setLanguage(langFromSession)
    }else{
      Sprachen.setLanguage(Sprachen.getInterfaceLanguage())
    }
  }
  _setLanguage(lang){
    Sprachen.setLanguage(lang)
    reactLocalStorage.set('lang',lang);
    let langFromSession = reactLocalStorage.get('lang');
    this.setState({})//refresh page
  }
  _getLanguage(lang){
    return Sprachen.getLanguage()
  }
  incrmentLoadedPages(){
    pagesLoaded++
    if (pagesLoaded===allPagesToBeLoaded) {
      pagesLoaded=0
      this.setState({load:true})
      //window.scrollTo(0,0)
    }
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
    this.loadOtherPagesForStart()
  }

  updateWindowDimensions() {
    this.setState({windowHeight: window.innerHeight});
  }

  renderOtherPages(){
    if (!othersPagesLoaded) {
      return null
    }

    return(
      <div>
        <this.Produkte incrmentLoadedPages={this.incrmentLoadedPages} minHeight={this.state.windowHeight}/>
        <this.Functionen incrmentLoadedPages={this.incrmentLoadedPages} minHeight={this.state.windowHeight} />
        <this.Preise incrmentLoadedPages={this.incrmentLoadedPages} minHeight={this.state.windowHeight} />
        <this.Contact incrmentLoadedPages={this.incrmentLoadedPages} minHeight={this.state.windowHeight}/>
      </div>
    )
  }

  getHome(){
    return (
      <div>
        <Home minHeight={this.state.windowHeight}/>
        {this.renderOtherPages()}
      </div>
    )
  }

  setPage(page){
    if (!othersPagesLoaded) {
      this.loadOtherPagesForStart()
      return
    }
    if (this.state.page!==page) {
      this.setState({page:page})
      page==='home' || this.loadOtherPages()
      page==='home' || window.scrollTo( 0, 0 );
    }
  }

  getpage(){
    switch (this.state.page) {
      case 'home':
        return this.getHome()
      case 'about':
        return <this.About setPage={this.setPage.bind(this)} minHeight={this.state.windowHeight} />
      case 'agb':
        return <this.AGB setPage={this.setPage.bind(this)} minHeight={this.state.windowHeight} />
      case 'datenschutz':
        return <this.Datenschutz setPage={this.setPage.bind(this)} minHeight={this.state.windowHeight} />
      case 'impressum':
        return <this.Impressum setPage={this.setPage.bind(this)} minHeight={this.state.windowHeight} />
    }
  }

  render() {
    if (maintenance) {
      return(
        <Maintenance />
      )
    }
    return (<div className="App">
      <PageCover/>
      <Header othersPagesLoaded={othersPagesLoaded} getLanguage={this._getLanguage} setLanguage={this._setLanguage} setPage={this.setPage.bind(this)}  headerFixedAtTheTop={this.state.headerFixedAtTheTop}/>
      {this.getpage()}
      <Footer setLanguage={this._setLanguage}  setPage={this.setPage.bind(this)}/>
    </div>);
  }
}

export default App;
