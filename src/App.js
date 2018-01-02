import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy'
import Responsive from 'react-responsive';
import './App.css';
import logo from './img/logo.png';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: '0',
      headerFixedAtTheTop: false
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
  handleScroll(event) {
    console.log(event.pageY);
    if (event.pageY > 50) {
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

  desktopHeader() {
    return (<header className={this.state.headerFixedAtTheTop
        ? "App-header-at-top desktop"
        : "App-header desktop"}>
      <a class="navbar-brand" href="#" style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <span class="logo">
          <img class="img-logo" src={logo} alt="Logo"></img>
        </span>
        <span class="text">
          NourPos
        </span>
      </a>
      <div >
        <Scrollspy offset={-60} items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current">
          <li>
            <a href="#section-1">ÜBER UNS</a>
          </li>
          <li>
            <a href="#section-2">PRODUKTE</a>
          </li>
          <li>
            <a href="#section-3">FUNCTIONEN</a>
          </li>
          <li>
            <a href="#section-4">PREISE</a>
          </li>
          <li>
            <a href="#section-5">KONTAKT</a>
          </li>
        </Scrollspy>
      </div>
    </header>)
  }

  tabletHeader(){
    return (<header className={this.state.headerFixedAtTheTop
        ? "App-header-at-top"
        : "App-header"}>
      <a class="navbar-brand" href="#" style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <span class="logo">
          <img class="img-logo" src={logo} alt="Logo"></img>
        </span>
        <span class="text">
          NourPos
        </span>
      </a>
      <div >
        <Scrollspy offset={-60} items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current">
          <li>
            <a href="#section-1">ÜBER UNS</a>
          </li>
          <li>
            <a href="#section-2">PRODUKTE</a>
          </li>
          <li>
            <a href="#section-3">FUNCTIONEN</a>
          </li>
          <li>
            <a href="#section-4">PREISE</a>
          </li>
          <li>
            <a href="#section-5">KONTAKT</a>
          </li>
        </Scrollspy>
      </div>
    </header>)
  }

  mobileHeader(){
    return (<header className="mobile">
      <a class="navbar-brand" href="#" style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <span class="logo">
          <img class="img-logo" src={logo} alt="Logo"></img>
        </span>
        <span class="text">
          NourPos
        </span>
      </a>
      <div style={{paddingTop:50,textAlign:'left'}}>
        <Scrollspy offset={-60} items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current">
          <li>
            <a href="#section-1">ÜBER UNS</a>
          </li>
          <li>
            <a href="#section-2">PRODUKTE</a>
          </li>
          <li>
            <a href="#section-3">FUNCTIONEN</a>
          </li>
          <li>
            <a href="#section-4">PREISE</a>
          </li>
          <li>
            <a href="#section-5">KONTAKT</a>
          </li>
        </Scrollspy>
      </div>
    </header>)
  }

  renderHeader() {
    return (
      <div>
      <Desktop>{this.mobileHeader()}</Desktop>
      <Tablet>{this.tabletHeader()}</Tablet>
      <Mobile>{this.mobileHeader()}</Mobile>
    </div>
    )
  }

  render() {
    return (<div className="App">
      {this.renderHeader()}
      <div class="page-cover">
        <div class="cover-bg"></div>
        <div class="cover-bg-mask"></div>
      </div>
      <div>
        <section style={{
            height: this.state.windowHeight,
            backgroundColor: 'transparent'
          }} id="section-1">ÜBER UNS
        </section>
        <section style={{
            height: this.state.windowHeight
          }} id="section-2">PRODUKTE
        </section>
        <section style={{
            height: this.state.windowHeight
          }} id="section-3">FUNCTIONEN
        </section>
        <section style={{
            height: this.state.windowHeight
          }} id="section-4">PREISE
        </section>
        <section style={{
            flexDirection: 'column',
            backgroundColor: 'white'
          }} id="section-5">
          <div style={{
              height: this.state.windowHeight
            }}>KONTAKT</div>
          <div className="footer" style={{
              height: 300,
              backgroundColor: '#1d1d1d'
            }}></div>
        </section>
      </div>

    </div>);
  }
}

export default App;
