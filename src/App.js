import React, {Component} from 'react';
import Responsive from 'react-responsive';
import './App.css';
import PageCover from './components/pageCover/PageCover';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Produkte from './components/produkte/Produkte';
import Functionen from './components/functionen/Functionen';
import Preise from './components/preise/Preise';
import AGB from './components/agb/AGB';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


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

  }

  componentDidMount() {
    this.updateWindowDimensions();
    //window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    //window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
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

  getAGB(){
    return (
      <div>
        <AGB setPage={this.setPage.bind(this)} minHeight={this.state.windowHeight} />
      </div>
    )
  }
  getPage(){
    return this.state.page
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
      case 'agb':
        return this.getAGB()
        break;
      default:

    }
  }

  render() {
    console.log('hmm');
    return (<div className="App">
      <PageCover/>
      <Header setPage={this.setPage.bind(this)} getPage={this.getPage.bind(this)} headerFixedAtTheTop={this.state.headerFixedAtTheTop}/>
      {this.getpage()}
      <Footer getPage={this.getPage.bind(this)} setPage={this.setPage.bind(this)}/>
    </div>);
  }
}

export default App;
