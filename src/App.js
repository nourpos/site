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

const Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
const langHashes={
  de:'default',
  ar:'1c3u5sl8t',
  en:'1c3u6020u',
  fr:'1c3u63baq'
}
var othersPagesLoaded = false;


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
  }
  componentWillMount(){
    this._check_language()
  }

  loadChatSupportTool =(langHash)=>{
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src=`https://embed.tawk.to/5a5d3192d7591465c706c61c/${langHash}`;
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  };

  componentDidMount() {
    this.loadOtherPagesForStart()
    this.updateWindowDimensions();
     window.addEventListener('resize', this.updateWindowDimensions);
     window.addEventListener('scroll', this.handleScroll.bind(this));
     setTimeout(()=>{
       let langHash = langHashes[Sprachen.getLanguage()]
       this.loadChatSupportTool(langHash)
     },10000)
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
      <Header  getLanguage={this._getLanguage} setLanguage={this._setLanguage} setPage={this.setPage.bind(this)}  headerFixedAtTheTop={this.state.headerFixedAtTheTop}/>
      {this.getpage()}
      <Footer setLanguage={this._setLanguage}  setPage={this.setPage.bind(this)}/>
    </div>);
  }
}

export default App;
