import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy'
import Responsive from 'react-responsive';
import { Form, Text } from 'react-form';
import './App.css';
import logo from './img/logo.png';
import mobile from './img/mobile.png';
import mobileBasisRaspi from './img/mobileBasisRaspi3.png';
var FontAwesome = require('react-fontawesome')

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
      menuOpen:false,
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
        <Scrollspy offset={-65} items={['Home', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current">
          <li>
            <a href="#Home">ÜBER UNS</a>
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
        <Scrollspy offset={-60} items={['Home', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current">
          <li>
            <a href="#Home">ÜBER UNS</a>
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

  toogleMenu(){
    this.setState({
      menuOpen:!this.state.menuOpen
    })
  }
  closeMenu(){
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false
      })
    }
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
      <span style={{position:'absolute',right:10,top:10,margin:0,alignItems:'center',justifyContent:'center',cursor:'pointer'}}
      onClick={this.toogleMenu.bind(this)}>
        {
          this.state.menuOpen?
          (
            <FontAwesome
              className="super-crazy-colors"
              name="remove"
              size="2x"
            />
          ):(
            <FontAwesome
              className="super-crazy-colors"
              name="bars"
              size="2x"
            />
          )
        }
      </span>
      <div class={`spy ${this.state.menuOpen?"open":'close'}`}>
        <Scrollspy offset={-60} items={['Home', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current"
          onUpdate={()=>{this.closeMenu()} }
        >
          <li>
            <a href="#Home">ÜBER UNS</a>
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
      <Desktop>{this.desktopHeader()}</Desktop>
      <Tablet>{this.tabletHeader()}</Tablet>
      <Mobile>{this.mobileHeader()}</Mobile>
    </div>
    )
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
              <img class="img-mobile" src={mobileBasisRaspi} alt="mobileLogo"></img>
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
              <img class="img-mobile" src={mobileBasisRaspi} alt="mobileLogo"></img>
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

  renderKontakt(){
    return (
      <div>
        <Desktop>{this.desktopKontakt()}</Desktop>
        <Tablet>{this.desktopKontakt()}</Tablet>
        <Mobile>{this.desktopKontakt()}</Mobile>
      </div>
    )
  }

  desktopKontakt(){

    const errorValidator = ( values ) => {
      const validateBetriebsName = ( betriebsName ) => {
        return !betriebsName ? 'Bitte nenne uns den Namen Deines Betriebs' : null;
      };
      const validatePlz = ( plz ) => {
        return !plz ? 'Bitte nenne uns Deine Postleitzahl.' : null;
      };
      const validateStadt = ( stadt ) => {
        return !stadt ? 'Bitte nenne uns Deine Stadt.' : null;
      };
      const validateEmail = ( email ) => {
        return !email ? 'Bitte nenne uns Deine E-Mail Adresse.' : null;
      };
      const validateTelefon = ( telefon ) => {
        return !telefon ? 'Bitte nenne uns Deine Telefonnummer.' : null;
      };
      console.log({
        betriebsName: validateBetriebsName( values.betriebsName ),
        plz: validatePlz( values.plz ),
        stadt: validateStadt( values.stadt ),
        email: validateEmail( values.email ),
        telefon: validateTelefon( values.telefon ),
      });
      return {
        betriebsName: validateBetriebsName( values.betriebsName ),
        plz: validatePlz( values.plz ),
        stadt: validateStadt( values.stadt ),
        email: validateEmail( values.email ),
        telefon: validateTelefon( values.telefon ),
      };
    }

    // warningValidator = ( values ) => {
    //   const validateBetriebsName = ( betriebsName ) => {
    //     return !betriebsName ? 'Bitte nenne uns den Namen Deines Betriebs' : null;
    //   };
    //   const validatePlz = ( plz ) => {
    //     return !plz ? 'Bitte nenne uns Deine Postleitzahl.' : null;
    //   };
    //   const validateStadt = ( stadt ) => {
    //     return !stadt ? 'Bitte nenne uns Deine Stadt.' : null;
    //   };
    //   const validateEmail = ( email ) => {
    //     return !email ? 'Bitte nenne uns Deine E-Mail Adresse.' : null;
    //   };
    //   const validateTelefon = ( telefon ) => {
    //     return !telefon ? 'Bitte nenne uns Deine Telefonnummer.' : null;
    //   };
    //
    //   return {
    //     betriebsName: validateBetriebsName( values.betriebsName ),
    //     plz: validateLastName( values.plz ),
    //     stadt: validateGender( values.stadt ),
    //     email: validateBio( values.email ),
    //     telefon: validateAuthorize( values.telefon ),
    //   };
    // }
    //
    // successValidator = ( values ) => {
    //   const validateBetriebsName = ( betriebsName ) => {
    //     return !betriebsName ? 'Bitte nenne uns den Namen Deines Betriebs' : null;
    //   };
    //   const validatePlz = ( plz ) => {
    //     return !plz ? 'Bitte nenne uns Deine Postleitzahl.' : null;
    //   };
    //   const validateStadt = ( stadt ) => {
    //     return !stadt ? 'Bitte nenne uns Deine Stadt.' : null;
    //   };
    //   const validateEmail = ( email ) => {
    //     return !email ? 'Bitte nenne uns Deine E-Mail Adresse.' : null;
    //   };
    //   const validateTelefon = ( telefon ) => {
    //     return !telefon ? 'Bitte nenne uns Deine Telefonnummer.' : null;
    //   };
    //
    //   return {
    //     betriebsName: validateBetriebsName( values.betriebsName ),
    //     plz: validateLastName( values.plz ),
    //     stadt: validateGender( values.stadt ),
    //     email: validateBio( values.email ),
    //     telefon: validateAuthorize( values.telefon ),
    //   };
    // }

      return (
        <Form
          validateError={errorValidator}
          onSubmit={submittedValues => {this.setState( { submittedValues } );console.log(submittedValues)}} >
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form1" className="mb-4">
              <label htmlFor="Betrieb">Name des Betriebs</label>
              <Text field="Betrieb" id="Betrieb" />
              <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{flex:1,flexDirection:'column',display:'flex'}}>
                  <label htmlFor="plz">Postleitzahl</label>
                  <Text field="plz" id="plz" />
                </div>
                <div style={{flex:.1}}></div>
                <div style={{flex:1,flexDirection:'column',display:'flex'}}>
                  <label htmlFor="stadt">Stadt</label>
                  <Text field="stadt" id="stadt" />
                </div>
              </div>
              <label htmlFor="Betrieb">E-Mail Adresse</label>
              <Text field="email" id="email" />
              <label htmlFor="tel">Telefon</label>
              <Text field="tel" id="tel" />
              <button type="submit" className="btn btn-primary">Jetz Kontaktieren!</button>
            </form>
          )}
        </Form>
      );


  }

  render() {
    return (<div className="App">
      {this.renderHeader()}
      <div class="page-cover">
        <div class="cover-bg"></div>
        <div class="cover-bg-mask"></div>
      </div>
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
        <section style={{
            flexDirection: 'column',
            backgroundColor: '#1ab7ea',
            paddingTop:'65px',
          }} id="section-5">


          <div style={{
              minHeight: this.state.windowHeight
            }}>
            <div style={{marginLeft:'auto',marginRight:'auto',maxWidth:'70%',display:'flex'}}>
                <div style={{flex:1}}>
                  <h3>JETZT KOSTENLOSE DEMO ANFORDERN!</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                </div>
                <div style={{flex:2,marginLeft:20}}>
                  {this.renderKontakt()}
                </div>
            </div>

          </div>


          <div className="footer" style={{
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
          </div>
        </section>
      </div>

    </div>);
  }
}

export default App;
