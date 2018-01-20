import React, {Component} from 'react';
import Responsive from 'react-responsive';

import {
  Form,
  StyledText,
} from 'react-form';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import 'react-responsive-modal/lib/css';
import './Contact.css';
import './form.css';
import logo from '../../img/logo.png';
import validator from 'validator';
import Sprachen from '../../languages/Sprachen'

const loader = (
    <span><img style={{width:'20px',animation: 'rotating 0.45s linear infinite'}} src={logo} alt="loader"/></span>
);

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;

const errorValidator = (values) => {

    const SprachAbkuerzungForAlpha=(lang)=>{
      let land=null
      switch (lang) {
        case 'ar':
          land='MA'
          break;
        case 'en':
          land='US'
          break;
        default:
          land=lang.toUpperCase()

      }
      return `${lang}-${land}`
    }

    const validateBetriebsName = (betriebsName) => {
      if (!betriebsName) {
        return Sprachen.nameOfConcernError
      }
      if (
        validator.isAlpha(betriebsName.split(" ").join(""),SprachAbkuerzungForAlpha('ar'))
        || validator.isAlpha(betriebsName.split(" ").join(""),SprachAbkuerzungForAlpha('de'))
        || validator.isAlpha(betriebsName.split(" ").join(""),SprachAbkuerzungForAlpha('en'))
        || validator.isAlpha(betriebsName.split(" ").join(""),SprachAbkuerzungForAlpha('fr'))
      ) {
        return null
      }
      return Sprachen.nameOfConcernWarning
    };
    const validatePlz = (plz) => {
      if (!plz) {
        return Sprachen.plzError
      }
      if (!validator.isPostalCode(plz,'any')) {
        return Sprachen.plzWarning
      }
      return null
    };
    const validateStadt = (stadt) => {
      if (!stadt) {
        return Sprachen.cityError
      }
      if (
        validator.isAlpha(stadt.split(" ").join(""),SprachAbkuerzungForAlpha('ar'))
        || validator.isAlpha(stadt.split(" ").join(""),SprachAbkuerzungForAlpha('de'))
        || validator.isAlpha(stadt.split(" ").join(""),SprachAbkuerzungForAlpha('en'))
        || validator.isAlpha(stadt.split(" ").join(""),SprachAbkuerzungForAlpha('fr'))
      ) {
        return null
      }
      return Sprachen.cityWarning
    };
    const validatetel=(tel)  =>
      {
        if (!tel) {
          return Sprachen.telError
        }
        if (!validator.isNumeric(tel) || tel.length<10){
          return Sprachen.telWarning
        }
        return null
      }

    const validateEmail = (email) => {
      if (!email) {
        return Sprachen.emailError
      }
      if (!validator.isEmail(email)) {
        return Sprachen.emailWarning
      }
      return null
    };


    return {
      Betrieb: validateBetriebsName(values.Betrieb),
      plz: validatePlz(values.plz),
      stadt: validateStadt(values.stadt),
      email: validateEmail(values.email),
      tel: validatetel(values.tel)
    };
  }

const statusOK=Sprachen.weContactYou
const statusNotOK=Sprachen.errorOcurred

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailSended:false,
      error:false,
      ismodalOpen:false,
      waitForResult:false,
      validateOnSubmit:true,

    };


  }
  openModal = () => {
  this.setState({ ismodalOpen: true });
};

  onCloseModal = () => {
  this.setState ({
    isEmailSended:false,
    error:false,
    ismodalOpen:false,
    waitForResult:false,
  });
};
shouldComponentUpdate(){
  return true
}
componentDidMount(){
  this.lang=Sprachen.getLanguage()
}
  renderModal() {
    const { ismodalOpen } = this.state;
    return (
      <div>
        <Modal styles={{modal:{minWidth:'400px',justifyContent:'center',alignItems:'center',display:'flex'}}} open={ismodalOpen} onClose={this.onCloseModal.bind(this)} little>
          <h3 style={{color:this.state.errot?'#dd4b39':'#25D366'}}>{
            this.state.waitForResult?loader:this.state.errot?statusNotOK:statusOK
          }</h3>
        </Modal>
      </div>
    );
  }
  onSubmitForm=(submittedValues,e,formApi)=>{
    var self=this;
    var data = JSON.stringify(submittedValues);

    self.setState({ismodalOpen:true,waitForResult:true})

    fetch('https://formspree.io/k.echchennouf@gmail.com', {
       method: 'post',
       headers: {'Content-Type':'application/json'},
       body: data
    }).then(function (res) {
      if (true) {
        self.setState({error:false,isEmailSended:true,waitForResult:false})
        formApi.resetAll()
      }
    })
    .catch(function (err) {
      self.setState({error:true,isEmailSended:false,waitForResult:false})
    });
  }
  onSubmitFailure=( errors, formApi )=>{
    this.setState({validateOnSubmit:false})
  }

  mobileForm() {
    return (<Form  validateError={errorValidator}
      dontValidateOnMount={true} validateOnSubmit={this.state.validateOnSubmit} onSubmitFailure={this.onSubmitFailure} onSubmit={this.onSubmitForm}>
      {
        formApi => (<form onSubmit={formApi.submitForm}  id="form1" className="mb-4">
          <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}  htmlFor="Betrieb">{Sprachen.nameOfConcern}</label>
          <StyledText field="Betrieb" id="Betrieb"/>
          <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
            <div style={{
                flex: 1,
                flexDirection: 'column',
                display: 'flex'
              }}>
              <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="plz">{Sprachen.plz}</label>
              <StyledText field="plz" id="plz"/>
            </div>
            <div style={{
                flex: .1
              }}></div>
            <div style={{
                flex: 1,
                flexDirection: 'column',
                display: 'flex'
              }}>
              <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="stadt">{Sprachen.city}</label>
              <StyledText field="stadt" id="stadt"/>
            </div>
          </div>
          <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="Betrieb">{Sprachen.email}</label>
          <StyledText field="email" id="email"/>
          <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="tel">{Sprachen.tel}</label>
          <StyledText field="tel" id="tel"/>
          <button type="submit" className="btn btn-primary">{Sprachen.contactNow}</button>
        </form>)
      }
    </Form>);
  }

  tabletForm() {
    return (<Form  validateError={errorValidator}
      dontValidateOnMount={true} validateOnSubmit={this.state.validateOnSubmit} onSubmitFailure={this.onSubmitFailure} onSubmit={this.onSubmitForm}>
      {
        formApi => (<form onSubmit={formApi.submitForm} id="form1" className="mb-4">
          <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="Betrieb">{Sprachen.nameOfConcern}</label>
          <StyledText field="Betrieb" id="Betrieb"/>
          <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
            <div style={{
                flex: 1,
                flexDirection: 'column',
                display: 'flex'
              }}>
              <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="plz">{Sprachen.plz}</label>
              <StyledText field="plz" id="plz"/>
            </div>
            <div style={{
                flex: .1
              }}></div>
            <div style={{
                flex: 1,
                flexDirection: 'column',
                display: 'flex'
              }}>
              <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="stadt">{Sprachen.city}</label>
              <StyledText field="stadt" id="stadt"/>
            </div>
          </div>
          <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="Betrieb">{Sprachen.email}</label>
          <StyledText field="email" id="email"/>
          <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="tel">{Sprachen.tel}</label>
          <StyledText field="tel" id="tel"/>
          <button type="submit" className="btn btn-primary">{Sprachen.contactNow}</button>
        </form>)
      }
    </Form>);
  }
  desktopForm() {

    return (<Form  validateError={errorValidator}
      dontValidateOnMount={true} validateOnSubmit={this.state.validateOnSubmit} onSubmitFailure={this.onSubmitFailure} onSubmit={this.onSubmitForm}>
      {
        formApi => (<form onSubmit={formApi.submitForm} id="form1" className="mb-4">
          <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="Betrieb">{Sprachen.nameOfConcern}</label>
          <StyledText field="Betrieb" id="Betrieb"/>
          <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}>
            <div style={{
                flex: 1,
                flexDirection: 'column',
                display: 'flex'
              }}>
              <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="plz">{Sprachen.plz}</label>
              <StyledText field="plz" id="plz"/>
            </div>
            <div style={{
                flex: .1
              }}></div>
            <div style={{
                flex: 1,
                flexDirection: 'column',
                display: 'flex'
              }}>
              <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="stadt">{Sprachen.city}</label>
              <StyledText field="stadt" id="stadt"/>
            </div>
          </div>
          <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="email">{Sprachen.email}</label>
          <StyledText field="email" id="email"/>
          <label   style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left'}}htmlFor="tel">{Sprachen.tel}</label>
          <StyledText field="tel" id="tel"/>
          <button type="submit" className="btn btn-primary">{Sprachen.contactNow}</button>
        </form>)
      }
    </Form>);
  }

  renderStyledText() {
    return (<div>
      <h1 style={{
          StyledTextAlign: 'center',
          color: '#fff'
        }}>{Sprachen.passtNourPos}</h1>
      <p style={{
          StyledTextAlign: 'left',
          color: '#fff',
          fontSize: '1.2em'
        }}>
        {Sprachen.contactText}
      </p>
    </div>)
  }

  render() {
    console.log('hm');
    return (<div>

      {this.renderModal()}
      <Desktop>
        <section style={{
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#21759b',
            textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
            direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
          }} id="kontakt" className="_desktop">

          <div style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '42%',
              display: 'flex',
              flexDirection: 'column'
            }}>
            <div>
              {this.renderStyledText()}
            </div>

            <div>
              {this.desktopForm()}
            </div>
          </div>
        </section>
      </Desktop>
      <Tablet>
        <section style={{
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#21759b',
            textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
            direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
          }} id="kontakt" className="_tablet">

          <div style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '95%',
              display: 'flex',
              flexDirection: 'column'
            }}>
            <div>
              {this.renderStyledText()}
            </div>

            <div>
              {this.tabletForm()}
            </div>
          </div>
        </section>
      </Tablet>
      <Mobile>
        <section style={{
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#21759b',
            textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
            direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
          }} id="kontakt" className="_mobile">

          <div style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '95%',
              display: 'flex',
              flexDirection: 'column'
            }}>
            <div>
              {this.renderStyledText()}
            </div>

            <div>
              {this.mobileForm()}
            </div>
          </div>
        </section>
      </Mobile>
    </div>)
  }
}

export default Contact;
