import React, {Component} from 'react';
import Responsive from 'react-responsive';
import './App.css';
import Header from './components/header/Header';
import PageCover from './components/pageCover/PageCover';
import Contact from './components/contact/Contact';

import mobileBasisRaspi from './img/mobileBasis.png';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: '0',
      headerFixedAtTheTop: false,
      submittedValues:{}
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

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



  renderHome(){
    return (
      <div>
        <Desktop>{this.desktopHome()}</Desktop>
        <Tablet>{this.tabletHome()}</Tablet>
        <Mobile>{this.mobileHome()}</Mobile>
      </div>
    )
  }

  desktopHome(){
    return(
      <section style={{
          minHeight: this.state.windowHeight,
          backgroundColor: 'transparent',
        }} id="Home">
        <div className="about" style={{flex:1,display:'flex'}}>
          <div className="about-wrapper">
          <div className="row">
            <div className="col left" style={{flexDirection:'column'}}>
              <div style={{textAlign:'left'}}>
                <h1 style={{color:'white',fontSize:30}}>NourPos Kassen</h1>
                <h1 style={{color:'white',fontSize:30}}>vom Gastronom für Gastronomen</h1>
                <h3 style={{color:'white'}}>Stabil, langlebig und leistungsstark</h3>
              </div>
            </div>
            <div className="col right" style={{}}>
              <img className="img-mobile" src={mobileBasisRaspi} alt="mobileLogo"></img>
            </div>
          </div>
          </div>
        </div>
      </section>
    )
  }
  tabletHome(){
    return(
      <section style={{
          minHeight: this.state.windowHeight,
          backgroundColor: 'transparent',
        }} id="Home">
        <div className="about" style={{flex:1,display:'flex'}}>
          <div className="about-wrapper">
          <div className="row">
            <div className="col left" style={{flexDirection:'column'}}>
              <h1 style={{color:'white',fontSize:30}}>NourPos Kassen</h1>
              <h1 style={{color:'white',fontSize:35}}>vom Gastronom für Gastronomen</h1>
              <h3 style={{color:'white'}}>Stabil, langlebig und leistungsstark</h3>
            </div>
            <div className="col right" style={{}}>
              <img className="img-mobile" src={mobileBasisRaspi} alt="mobileLogo"></img>
            </div>
          </div>
          </div>
        </div>
      </section>
    )
  }
  mobileHome(){
    return(
      <section style={{
          minHeight: this.state.windowHeight,
          backgroundColor: 'transparent',
        }} id="Home">
        <div className="about" style={{flex:1,display:'flex'}}>
          <div className="about-wrapper">
          <div className="row">
            <div className="col left" style={{flexDirection:'column'}}>
              <h1 style={{color:'white',fontSize:30}}>NourPos Kassen</h1>
              <h1 style={{color:'white',fontSize:35}}>vom Gastronom für Gastronomen</h1>
              <h3 style={{color:'white'}}>Stabil, langlebig und leistungsstark</h3>
            </div>
          </div>
          </div>
        </div>
      </section>
    )
  }

  render() {
    return (<div className="App">
      <Header headerFixedAtTheTop={this.state.headerFixedAtTheTop} />
      <PageCover />
      <div>
        {this.renderHome()}
        <section style={{
            minHeight: this.state.windowHeight
          }} id="section-2">PRODUKTE
        </section>
        <section style={{
            minHeight: this.state.windowHeight
          }} id="section-3">FUNCTIONEN
        </section>
        <section style={{
            minHeight: this.state.windowHeight
          }} id="section-4">PREISE
        </section>
        <Contact minHeight={this.state.windowHeight} />

        <section className="footer" style={{
            height: 300,
            backgroundColor: '#1d1d1d',
            justifyContent:'center',
            display:'flex'
          }}>
          <div style={{display:'flex',width:'70%'}}>
            <div style={{width:'33%',margin:20,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <h3>Service</h3>
              <ul>
                <li>Kontakt</li>
                <li>Blog</li>
                <li>Irgendwas</li>
                <li>Noch was</li>
                <li>Hmm das was es</li>
              </ul>
            </div>
            <div style={{width:'33%',margin:20,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <h3>Service</h3>
              <ul>
                <li>Kontakt</li>
                <li>Blog</li>
                <li>Irgendwas</li>
                <li>Noch was</li>
                <li>Hmm das was es</li>
              </ul>
            </div>
            <div style={{width:'33%',margin:20,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <h3>Service</h3>
              <ul>
                <li>Kontakt</li>
                <li>Blog</li>
                <li>Irgendwas</li>
                <li>Noch was</li>
                <li>Hmm das was es</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

    </div>);
  }
}

export default App;
