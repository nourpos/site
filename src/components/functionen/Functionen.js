import React, {Component} from 'react';

import Responsive from 'react-responsive';
import FunctionenCSS from './Functionen.css';




const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;
const Default = props => <Responsive {...props} minWidth={768}/>;


var FontAwesome = require('react-fontawesome')
const checkIcon = (<FontAwesome className="check" name="check" size="1x"/>)

class Functionen extends React.Component {
  render() {
    return (
      <div>
      <Desktop>
       <section style={{
          flexDirection: 'column',
          minHeight: this.props.minHeight,
          backgroundColor: '#fff'
        }} id="functionen" className="_desktop">

        <div className="md_width">
          <h3 >Vorteile und Funktionen</h3>
          <div class="_SitThW">
            <ul >
            <li>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                <div>
                  <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                </div>
                <span class="checkIcon">{checkIcon}</span>
              </div>
            </li>
            <li>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                <div>
                  <p className="functionen-text">Lager- und Bestandsmanagement zur effizienten Planung von Lieferantenbestellungen</p>
                </div>
                <span class="checkIcon">{checkIcon}</span>
              </div>
            </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Zahlungen in bar, per Karte oder NFC annehmen und digitale Quittungen senden</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verschiedene Funktionen für die Gastronomie wie offene und geteilte Rechnungen sowie Tischmanagement</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Lager- und Bestandsmanagement zur effizienten Planung von Lieferantenbestellungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Annahme von Bestellungen am Tisch auch ohne Internetverbindung für komplette Mobilität</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Lager- und Bestandsmanagement zur effizienten Planung von Lieferantenbestellungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Annahme von Bestellungen am Tisch auch ohne Internetverbindung für komplette Mobilität</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Annahme von Bestellungen am Tisch auch ohne Internetverbindung für komplette Mobilität</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
       </section>
      </Desktop>
      <Tablet>
      <section style={{
         flexDirection: 'column',
         minHeight: this.props.minHeight,
         backgroundColor: '#fff'
       }} id="functionen" className="_tablet">

       <div className="xs_width">
         <h3 >Vorteile und Funktionen</h3>
         <div class="_SitThW">
           <ul >
           <li>
             <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
               <div>
                 <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
               </div>
               <span class="checkIcon">{checkIcon}</span>
             </div>
           </li>
           <li>
             <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
               <div>
                 <p className="functionen-text">Lager- und Bestandsmanagement zur effizienten Planung von Lieferantenbestellungen</p>
               </div>
               <span class="checkIcon">{checkIcon}</span>
             </div>
           </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Zahlungen in bar, per Karte oder NFC annehmen und digitale Quittungen senden</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Verschiedene Funktionen für die Gastronomie wie offene und geteilte Rechnungen sowie Tischmanagement</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Lager- und Bestandsmanagement zur effizienten Planung von Lieferantenbestellungen</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Annahme von Bestellungen am Tisch auch ohne Internetverbindung für komplette Mobilität</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Lager- und Bestandsmanagement zur effizienten Planung von Lieferantenbestellungen</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Annahme von Bestellungen am Tisch auch ohne Internetverbindung für komplette Mobilität</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Annahme von Bestellungen am Tisch auch ohne Internetverbindung für komplette Mobilität</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                 </div>
                 <span class="checkIcon">{checkIcon}</span>
               </div>
             </li>
           </ul>
         </div>
       </div>
      </section>
      </Tablet>
      <Mobile>
      <section style={{
          flexDirection: 'column',
          minHeight: this.props.minHeight,
          backgroundColor: '#fff'
        }} id="functionen" className="_desktop">

        <div className="xs_width">
          <h3 >Vorteile und Funktionen</h3>
          <div class="_SitThW">
            <ul >
            <li>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                <div>
                  <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                </div>
                <span class="checkIcon">{checkIcon}</span>
              </div>
            </li>
            <li>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                <div>
                  <p className="functionen-text">Lager- und Bestandsmanagement zur effizienten Planung von Lieferantenbestellungen</p>
                </div>
                <span class="checkIcon">{checkIcon}</span>
              </div>
            </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Zahlungen in bar, per Karte oder NFC annehmen und digitale Quittungen senden</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verschiedene Funktionen für die Gastronomie wie offene und geteilte Rechnungen sowie Tischmanagement</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Lager- und Bestandsmanagement zur effizienten Planung von Lieferantenbestellungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Annahme von Bestellungen am Tisch auch ohne Internetverbindung für komplette Mobilität</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Lager- und Bestandsmanagement zur effizienten Planung von Lieferantenbestellungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Annahme von Bestellungen am Tisch auch ohne Internetverbindung für komplette Mobilität</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Annahme von Bestellungen am Tisch auch ohne Internetverbindung für komplette Mobilität</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">Verkaufsübersichten und tägliche Umsatzberichte für bessere geschäftliche Entscheidungen</p>
                  </div>
                  <span class="checkIcon">{checkIcon}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </Mobile>
      </div>
    );
  }
}

export default Functionen;
