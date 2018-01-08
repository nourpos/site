import React, {Component} from 'react';
import Responsive from 'react-responsive';
import './App.css';
import PageCover from './components/pageCover/PageCover';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Produkte from './components/produkte/Produkte';
import Functionen from './components/functionen/Functionen';
import Preise from './components/preise/Preise';
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
      submittedValues: {}
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    //window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
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



  render() {
    return (<div className="App">
      <PageCover/>
      <Header headerFixedAtTheTop={this.state.headerFixedAtTheTop}/>
      <Home minHeight={this.state.windowHeight}/>
      <Produkte minHeight={this.state.windowHeight}/>
      <Functionen minHeight={this.state.windowHeight} />
      <Preise minHeight={this.state.windowHeight} />
      <Contact minHeight={this.state.windowHeight}/>
      <Footer/>
    </div>);
  }
}

export default App;
