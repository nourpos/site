import React, {Component} from 'react';
import Responsive from 'react-responsive';

import {Form, Text} from 'react-form';
import './Contact.css';

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;

const errorValidator = (values) => {
  const validateBetriebsName = (betriebsName) => {
    return !betriebsName
      ? 'Bitte nenne uns den Namen Deines Betriebs'
      : null;
  };
  const validatePlz = (plz) => {
    return !plz
      ? 'Bitte nenne uns Deine Postleitzahl.'
      : null;
  };
  const validateStadt = (stadt) => {
    return !stadt
      ? 'Bitte nenne uns Deine Stadt.'
      : null;
  };
  const validateEmail = (email) => {
    return !email
      ? 'Bitte nenne uns Deine E-Mail Adresse.'
      : null;
  };
  const validateTelefon = (telefon) => {
    return !telefon
      ? 'Bitte nenne uns Deine Telefonnummer.'
      : null;
  };

  return {
    betriebsName: validateBetriebsName(values.betriebsName),
    plz: validatePlz(values.plz),
    stadt: validateStadt(values.stadt),
    email: validateEmail(values.email),
    telefon: validateTelefon(values.telefon)
  };
}

const warningValidator = (values) => {
  const validateBetriebsName = (betriebsName) => {
    return !betriebsName
      ? 'Bitte nenne uns den Namen Deines Betriebs'
      : null;
  };
  const validatePlz = (plz) => {
    return !plz
      ? 'Bitte nenne uns Deine Postleitzahl.'
      : null;
  };
  const validateStadt = (stadt) => {
    return !stadt
      ? 'Bitte nenne uns Deine Stadt.'
      : null;
  };
  const validateEmail = (email) => {
    return !email
      ? 'Bitte nenne uns Deine E-Mail Adresse.'
      : null;
  };
  const validateTelefon = (telefon) => {
    return !telefon
      ? 'Bitte nenne uns Deine Telefonnummer.'
      : null;
  };

  return {
    betriebsName: validateBetriebsName(values.betriebsName),
    plz: validatePlz(values.plz),
    stadt: validateStadt(values.stadt),
    email: validateEmail(values.email),
    telefon: validateTelefon(values.telefon)
  };
}

const successValidator = (values) => {
  const validateBetriebsName = (betriebsName) => {
    return !betriebsName
      ? 'Bitte nenne uns den Namen Deines Betriebs'
      : null;
  };
  const validatePlz = (plz) => {
    return !plz
      ? 'Bitte nenne uns Deine Postleitzahl.'
      : null;
  };
  const validateStadt = (stadt) => {
    return !stadt
      ? 'Bitte nenne uns Deine Stadt.'
      : null;
  };
  const validateEmail = (email) => {
    return !email
      ? 'Bitte nenne uns Deine E-Mail Adresse.'
      : null;
  };
  const validateTelefon = (telefon) => {
    return !telefon
      ? 'Bitte nenne uns Deine Telefonnummer.'
      : null;
  };

  return {
    betriebsName: validateBetriebsName(values.betriebsName),
    plz: validatePlz(values.plz),
    stadt: validateStadt(values.stadt),
    email: validateEmail(values.email),
    telefon: validateTelefon(values.telefon)
  };
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mobileForm() {
    return (<Form validateError={errorValidator} onSubmit={submittedValues => {
        this.setState({submittedValues});
        console.log(submittedValues)
      }}>
      {
        formApi => (<form onSubmit={formApi.submitForm} id="form1" className="mb-4">
          <label htmlFor="Betrieb">Name des Betriebs</label>
          <Text field="Betrieb" id="Betrieb"/>
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
              <Text field="plz" id="plz"/>
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
              <Text field="stadt" id="stadt"/>
            </div>
          </div>
          <label htmlFor="Betrieb">E-Mail Adresse</label>
          <Text field="email" id="email"/>
          <label htmlFor="tel">Telefon</label>
          <Text field="tel" id="tel"/>
          <button type="submit" className="btn btn-primary">Jetz Kontaktieren!</button>
        </form>)
      }
    </Form>);
  }
  desktopForm() {
    return (<Form validateError={errorValidator} onSubmit={submittedValues => {
        this.setState({submittedValues});
        console.log(submittedValues)
      }}>
      {
        formApi => (<form onSubmit={formApi.submitForm} id="form1" className="mb-4">
          <label htmlFor="Betrieb">Name des Betriebs</label>
          <Text field="Betrieb" id="Betrieb"/>
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
              <Text field="plz" id="plz"/>
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
              <Text field="stadt" id="stadt"/>
            </div>
          </div>
          <label htmlFor="Betrieb">E-Mail Adresse</label>
          <Text field="email" id="email"/>
          <label htmlFor="tel">Telefon</label>
          <Text field="tel" id="tel"/>
          <button type="submit" className="btn btn-primary">Jetz Kontaktieren!</button>
        </form>)
      }
    </Form>);
  }

  renderText() {
    return (<div>
      <h1 style={{
          textAlign: 'center',
          color: '#fff'
        }}>Passt NourPos zu Ihrem Geschäft?</h1>
      <p style={{
          textAlign: 'left',
          color: '#fff',
          fontSize: '1.2em'
        }}>
        Unsere Kundenberater sind selbst gestandene Gastronomen und wissen, worauf es ankommt. Einfach jetzt in unser Kontaktformular eintragen, anrufen unter 0800 12345678 oder eine E-Mail an hello@nourpos.com senden.
      </p>
    </div>)
  }

  render() {
    return (<div>
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
              {this.renderText()}
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
              {this.renderText()}
            </div>

            <div>
              {this.mobileForm()}
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
              {this.renderText()}
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
