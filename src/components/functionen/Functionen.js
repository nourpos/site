import React, {Component} from 'react';

import Responsive from 'react-responsive';
import './Functionen.css';

import Sprachen from '../../languages/Sprachen'

const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;


var FontAwesome = require('react-fontawesome')
const checkIcon = (<FontAwesome className="check" name="check" size="1x"/>)
class Functionen extends React.Component {
  constructor(props){
    super(props)
    this.lang=Sprachen.getLanguage()
  }
  shouldComponentUpdate(){
    if (this.lang!==Sprachen.getLanguage()) {
      this.lang=Sprachen.getLanguage()
      return true
    }
    return false
  }
  render() {
    console.log('test');
    const checkIconSpan = (<span class="checkIcon" style={{left:this.lang==='ar'?'-100px':'auto',right:this.lang==='ar'?'auto':'0'}}>{checkIcon}</span>)
    const checkIconSpanTablet = (<span class="checkIcon" style={{left:this.lang==='ar'?'-100px':'auto',right:this.lang==='ar'?'auto':'0'}}>{checkIcon}</span>)
    const checkIconSpanMobile = (<span class="checkIcon" style={{left:this.lang==='ar'?'-2em':'auto',right:this.lang==='ar'?'auto':'0'}}>{checkIcon}</span>)

    return (
      <div>
      <Desktop>
       <section style={{
          flexDirection: 'column',
          minHeight: '100vh',

          textAlign:this.lang==='ar'?'right':'left',
          direction: this.lang==='ar'?'rtl':'ltr'
        }} id="functionen" className="_desktop">

        <div className="md_width">
          <h1 >{Sprachen.vorteile}</h1>
          <div class="_SitThW" style={{paddingRight:this.lang==='ar'?'0px':''}}>
            <ul >
            <li>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div>
                  <p className="functionen-text">{Sprachen.offlineArbeiten}</p>
                </div>
                {checkIconSpan}
              </div>
            </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.escSupport}</p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.bericht}</p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.bestellNotiz}</p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.rechnungRecover} </p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.rueckgeldrechner}</p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.splittRechnung} </p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.verlegeTische} </p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>

              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.annahmeBestellunegn}</p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.rechtemanagementUndBenutzerprofile} </p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.rabatteVergeben}</p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.editArtikel} </p>
                  </div>
                  {checkIconSpan}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.emailSupport}</p>
                  </div>
                  {checkIconSpan}
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
         minHeight: '100vh',

         textAlign:this.lang==='ar'?'right':'left',
         direction: this.lang==='ar'?'rtl':'ltr'
       }} id="functionen" className="_tablet">

       <div className="xs_width">
         <h1 >{Sprachen.vorteile}</h1>
         <div class="_SitThW" style={{paddingRight:this.lang==='ar'?'0px':''}}>
           <ul >
           <li>
             <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
               <div>
                 <p className="functionen-text">{Sprachen.offlineArbeiten}</p>
               </div>
               {checkIconSpan}
             </div>
           </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.escSupport}</p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.bericht}</p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.bestellNotiz}</p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.rechnungRecover} </p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.rueckgeldrechner}</p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.splittRechnung} </p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.verlegeTische} </p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>

             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.annahmeBestellunegn}</p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.rechtemanagementUndBenutzerprofile} </p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.rabatteVergeben}</p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.editArtikel} </p>
                 </div>
                 {checkIconSpan}
               </div>
             </li>
             <li>
               <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                 <div>
                   <p className="functionen-text">{Sprachen.emailSupport}</p>
                 </div>
                 {checkIconSpan}
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
          minHeight: '100vh',

          textAlign:this.lang==='ar'?'right':'left',
          direction: this.lang==='ar'?'rtl':'ltr'
        }} id="functionen" className="_mobile">

        <div className="xs_width">
          <h1 >{Sprachen.vorteile}</h1>
          <div class="_SitThW" style={{paddingRight:this.lang==='ar'?'0px':''}}>
            <ul >
            <li>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div className="functionen-paragraph">
                  <p className="functionen-text">{Sprachen.offlineArbeiten}</p>
                </div>
                {checkIconSpanMobile}
              </div>
            </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.escSupport}</p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.bericht}</p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.bestellNotiz}</p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.rechnungRecover} </p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.rueckgeldrechner}</p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.splittRechnung} </p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.verlegeTische} </p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>

              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.annahmeBestellunegn}</p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.rechtemanagementUndBenutzerprofile} </p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.rabatteVergeben}</p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.editArtikel} </p>
                  </div>
                  {checkIconSpanMobile}
                </div>
              </li>
              <li>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                    <p className="functionen-text">{Sprachen.emailSupport}</p>
                  </div>
                  {checkIconSpanMobile}
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
