import React, {Component} from 'react';
import Responsive from 'react-responsive';

import {
  Form,
  StyledText,
} from 'react-form';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import ModalCss from 'react-responsive-modal/lib/css';
import './Contact.css';
import './form.css';
import logo from '../../img/logo.png';
import validator from 'validator';

const loader = (
    <span><img style={{width:'20px',animation: 'rotating 0.45s linear infinite'}} src={logo}/></span>
);

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;


const errorValidator = (values) => {

    const validateBetriebsName = (betriebsName) => {
      if (!betriebsName) {
        return 'Bitte nenne uns Deine Stadt.'
      }
      if (!validator.isAlpha(betriebsName)) {
        return 'Bitte geben Sie einen gültigen Stadt Namen ein.'
      }
      return null
    };
    const validatePlz = (plz) => {
      if (!plz) {
        return 'Bitte nenne uns Deine Postleitzahl.'
      }
      if (!validator.isPostalCode(plz,'DE')) {
        return 'Geben Sie eine gültige Postleitzahl ein.'
      }
      return null
    };
    const validateStadt = (stadt) => {
      if (!stadt) {
        return 'Bitte nenne uns Deine Stadt.'
      }
      if (!validator.isAlpha(stadt)) {
        return 'Bitte geben Sie einen gültigen Stadt Namen ein.'
      }
      return null
    };
    const validatetel=(tel)  =>
      {
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (!tel) {
          return 'Bitte nenne uns Deine Telefonnummer.'
        }
        if (!validator.isNumeric(tel) || tel.length<10){
          return 'Geben Sie eine gültige Telefonnummer ein.'
        }
        return null
      }

    const validateEmail = (email) => {
      if (!email) {
        return 'Bitte nenne uns Deine E-Mail Adresse.'
      }
      if (!validator.isEmail(email)) {
        return 'Bitte geben Sie eine gültige E-Mail Adresse ein.'
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

const statusOK="Wir haben Ihre Anfrage empfangen, wir kontaktieren Sie."
const statusNotOK="Fehler aufgetretten!"

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
    axios({
      method: 'post',
      url: 'https://formspree.io/k.echchennouf@gmail.com',
      data: {
        data:data
      }
    })
    .then(function (res) {
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
          <label htmlFor="Betrieb">Name des Betriebs</label>
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
              <label htmlFor="plz">Postleitzahl</label>
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
              <label htmlFor="stadt">Stadt</label>
              <StyledText field="stadt" id="stadt"/>
            </div>
          </div>
          <label htmlFor="Betrieb">E-Mail Adresse</label>
          <StyledText field="email" id="email"/>
          <label htmlFor="tel">tel</label>
          <StyledText field="tel" id="tel"/>
          <button type="submit" className="btn btn-primary">Jetz Kontaktieren!</button>
        </form>)
      }
    </Form>);
  }
  tabletForm() {
    return (<Form  validateError={errorValidator}
      dontValidateOnMount={true} validateOnSubmit={this.state.validateOnSubmit} onSubmitFailure={this.onSubmitFailure} onSubmit={this.onSubmitForm}>
      {
        formApi => (<form onSubmit={formApi.submitForm} id="form1" className="mb-4">
          <label htmlFor="Betrieb">Name des Betriebs</label>
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
              <label htmlFor="plz">Postleitzahl</label>
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
              <label htmlFor="stadt">Stadt</label>
              <StyledText field="stadt" id="stadt"/>
            </div>
          </div>
          <label htmlFor="Betrieb">E-Mail Adresse</label>
          <StyledText field="email" id="email"/>
          <label htmlFor="tel">tel</label>
          <StyledText field="tel" id="tel"/>
          <button type="submit" className="btn btn-primary">Jetz Kontaktieren!</button>
        </form>)
      }
    </Form>);
  }
  desktopForm() {

    return (<Form  validateError={errorValidator}
      dontValidateOnMount={true} validateOnSubmit={this.state.validateOnSubmit} onSubmitFailure={this.onSubmitFailure} onSubmit={this.onSubmitForm}>
      {
        formApi => (<form onSubmit={formApi.submitForm} id="form1" className="mb-4">
          <label htmlFor="Betrieb">Name des Betriebs</label>
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
              <label htmlFor="plz">Postleitzahl</label>
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
              <label htmlFor="stadt">Stadt</label>
              <StyledText field="stadt" id="stadt"/>
            </div>
          </div>
          <label htmlFor="email">E-Mail Adresse</label>
          <StyledText field="email" id="email"/>
          <label htmlFor="tel">tel</label>
          <StyledText field="tel" id="tel"/>
          <button type="submit" className="btn btn-primary">Jetz Kontaktieren!</button>
        </form>)
      }
    </Form>);
  }

  renderStyledText() {
    return (<div>
      <h1 style={{
          StyledTextAlign: 'center',
          color: '#fff'
        }}>Passt NourPos zu Ihrem Geschäft?</h1>
      <p style={{
          StyledTextAlign: 'left',
          color: '#fff',
          fontSize: '1.2em'
        }}>
        Unsere Kundenberater sind selbst gestandene Gastronomen und wissen, worauf es ankommt. Einfach jetzt in unser Kontaktformular eintragen, anrufen unter 0800 12345678 oder eine E-Mail an hello@nourpos.com senden.
      </p>
    </div>)
  }

  render() {
    return (<div>
      {this.renderModal()}
      <Desktop>
        <section style={{
            flexDirection: 'column',
            minHeight: this.props.minHeight,
            backgroundColor: '#1ab7ea'
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
            minHeight: this.props.minHeight,
            backgroundColor: '#1ab7ea'
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
              {this.tabletForm()}
            </div>
          </div>
        </section>
      </Tablet>
      <Mobile>
        <section style={{
            flexDirection: 'column',
            minHeight: this.props.minHeight,
            backgroundColor: '#1ab7ea'
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
