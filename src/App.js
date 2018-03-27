import React, {Component} from 'react';
import Responsive from 'react-responsive';
import './App.css';
import PageCover from './components/pageCover/PageCover';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Loader from './components/utils/Loader';

import Footer from './components/footer/Footer';
import Sprachen from './languages/Sprachen'
import Loadable from 'react-loadable';
import config from './config.json'
import Cookies from 'universal-cookie';

var maintenance = config.maintenance

const cookies = new Cookies();




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
      vorhandHinweisGelesen:false,
      acceptCockies:false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this._setLanguage = this._setLanguage.bind(this);
    this._getLanguage = this._getLanguage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.confirmVorhandHinweisGelesen=this.confirmVorhandHinweisGelesen.bind(this);
    this.savePageUntilOthersPagesLoaded=""

  }
  loadOtherPages(){
    this.Datenschutz = Loadable({
      loader: () => import('./components/datenschutz/Datenschutz'),
      loading: Loader,
    });
    this.Impressum = Loadable({
      loader: () => import('./components/impressum/Impressum'),
      loading: Loader,
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
      loading: Loader,
    });
    this.Preise = Loadable({
      loader: () => import('./components/preise/Preise'),
      loading: Loader,
    });
    this.Contact = Loadable({
      loader: () => import('./components/contact/Contact'),
      loading: Loader,
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
     //window.addEventListener('resize', this.updateWindowDimensions);
     window.addEventListener('scroll', this.handleScroll.bind(this));
     setTimeout(()=>{
       let langHash = langHashes[Sprachen.getLanguage()]
       this.loadChatSupportTool(langHash)
     },20000)
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
      window.removeEventListener('scroll', this.handleScroll);
  }
  _check_language(){
    let langFromSession = cookies.get('lang');
    if(langFromSession){
      Sprachen.setLanguage(langFromSession)
    }else{
      Sprachen.setLanguage(Sprachen.getInterfaceLanguage())
    }
  }
  _setLanguage(lang){
    Sprachen.setLanguage(lang)
    cookies.set('lang', lang, { path: '/' ,maxAge:3600*24*30*12});
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
        <this.Produkte  />
        <this.Functionen   />
        <this.Preise   />
        <this.Contact  />
      </div>
    )
  }

  getHome(){
    return (
      <div>
        <Home />
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
      case 'datenschutz':
        return <this.Datenschutz styles={{padding:'15px',backgroundColor: '#e8e8ec'}}  />
      case 'impressum':
        return <this.Impressum setPage={this.setPage.bind(this)}  />
    }
  }

  confirmVorhandHinweisGelesen(){
    this.setState({
      vorhandHinweisGelesen:true
    })
  }
  dontAskAgain(){
    cookies.set('dontAskAgain',true, { path: '/' ,maxAge:3600*24*30*12});
  }

  renderCockiesHinweis(){
    if (!this.state.acceptCockies) {
      return(
        null
      )
    }
  }

  render() {
    if (maintenance) {
      const Maintenance = Loadable({
        loader: () => import('./components/maintenance/Maintenance'),
        loading: Loader,
      });
      return(
        <Maintenance />
      )
    }
    if (!cookies.get('dontAskAgain') && (Sprachen.getLanguage()!=='ar' && !this.state.vorhandHinweisGelesen)) {
      const Hinweis = Loadable({
        loader: () => import('./components/hinweis/Hinweis'),
        loading: Loader,
      });
      return(
        <Hinweis confirmVorhandHinweisGelesen={this.confirmVorhandHinweisGelesen} dontAskAgain={this.dontAskAgain} />
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
