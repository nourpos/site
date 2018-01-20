import React, {Component} from 'react';
import Responsive from 'react-responsive';

import Sprachen from '../../languages/Sprachen'
import './Preise.css'


var FontAwesome = require('react-fontawesome')
const checkIcon = (<FontAwesome className="check" name="check" size="1x"/>)
const onIcon = (<FontAwesome style={{color:'#02b875'}} className="toggle-on" name="toggle-on" size="2x"/>)
const offIcon = (<FontAwesome className="toggle-off" name="toggle-off" size="2x"/>)



const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;

const hardwarePreise={
  basisTablet:150,
  mobileClient:130,
  basisHalter:40,
  server:130,
  drucker:130
}
const proPreis=620;
const UltimatePreis=660;
const server=130;
const lizenz=20;
const illimitLizenz=4;

class Preise extends React.Component {
  constructor(props){
    super(props);
    let hardwareObj={
      basisTablet:false,
      mobileClient:false,
      basisHalter:false,
      server:true,
      drucker:false
    }
    this.state={
      hardwareObj:hardwareObj,
      mobileClientLizenz:1,
    }
    this.lang=Sprachen.getLanguage()
  }


  umrechneCurrency(preis){
    if (this.lang==='ar') {
      return `${preis*10} DH`
    }
    return `${preis} €`
  }
  shouldComponentUpdate(){
    if (this.lang!==Sprachen.getLanguage()) {
      this.lang=Sprachen.getLanguage()
      return true
    }
    return true
  }
  compareWithPro(preis){
    return Object.values(this.state.hardwareObj).reduce((pv, cv) => pv&&cv, true) && preis===proPreis
  }
  compareWithUltimate(preis){
    return Object.values(this.state.hardwareObj).reduce((pv, cv) => pv&&cv, true) && preis===UltimatePreis
  }
  getCustomPreisModellFarbe(preis){
    // if (this.compareWithUltimate(preis))  return 'rgb(29, 29, 29)'
    // if (this.compareWithPro(preis)) return 'rgb(17, 89, 188)'
    return '#f3f3f5'
  }
  render() {
    let hardwareObjKeys=Object.keys(this.state.hardwareObj)
    let enabledHardwareObjKeys=hardwareObjKeys.filter(e=>this.state.hardwareObj[e]===true)
    let enabledHardwarePreise=enabledHardwareObjKeys.map(e=>hardwarePreise[e])
    let preis=enabledHardwarePreise.reduce((pv, cv) => pv+cv, 0) + (this.state.mobileClientLizenz*lizenz)
    return (<div>
      <Desktop>
        <section style={{
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#e8e8ec',
            textAlign:this.lang==='ar'?'right':'left',
            direction: this.lang==='ar'?'rtl':'ltr'
          }} id="preise" className="_desktop">

          <div className="md_width">
            <h1>{Sprachen.preisModel}</h1>
            <div className="assemblyYourPOS"><p >{Sprachen.assembleYourCashRegisterFromOurComponentsAccordingToYourNeeds}</p></div>
            <div className="_SitThW_padding">
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'255px',width:'100%',marginTop:'20px'}}>
                  <div className="angebot angebot-basis" style={{display:'flex',flexDirection:'column',height:'185px',width:'160px',justifyContent:'center',alignItems:'center',backgroundColor:this.getCustomPreisModellFarbe(preis)}}>
                    <div style={{color:'gray',flex:1.3}}><p>Starter</p></div>
                    <div style={{color:'black',flex:1}}><p>{this.umrechneCurrency(preis)}</p></div>
                    <div style={{flex:1}}><p></p></div>
                  </div>

                  <div className="angebot angebot-pro"  style={{display:'flex',flexDirection:'column',height:'185px',width:'160px',backgroundColor:'#1159bc',justifyContent:'center',alignItems:'center'}}>
                    <div style={{color:'white',flex:1.3}}><p>PRO</p></div>
                    <div style={{color:'white',flex:1}}><p>{this.umrechneCurrency(proPreis)}</p></div>
                    <div style={{flex:1}}><p></p></div>
                  </div>
                  <div className="angebot angebot-pro-x"  style={{display:'flex',flexDirection:'column',height:'185px',width:'160px',backgroundColor:'rgb(29, 29, 29)',justifyContent:'center',alignItems:'center'}}>
                    <div style={{color:'white',flex:1.3}}><p>Ultimate</p></div>
                    <div style={{color:'white',flex:1}}><p>{this.umrechneCurrency(UltimatePreis)}</p></div>
                    <div style={{flex:1}}><p></p></div>
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                    {Sprachen.serverAndRfidReader} <br /> Raspberrypi 3 + Chafon CF-RS103
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                    {Sprachen.basisTablet} <br /> Lenovo TAB2 A10-30
                  </div>
                  <div  className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,basisTablet:!this.state.hardwareObj.basisTablet}})}}>{this.state.hardwareObj.basisTablet?onIcon:offIcon}</span>
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                    {Sprachen.basisHalter} <br />  Brateck® - Universelle Halterung
                  </div>
                  <div  className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,basisHalter:!this.state.hardwareObj.basisHalter}})}}>{this.state.hardwareObj.basisHalter?onIcon:offIcon}</span>
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                    {Sprachen.epsonDrucker} <br /> Epson TM-T20II
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,drucker:!this.state.hardwareObj.drucker}})}}>{this.state.hardwareObj.drucker?onIcon:offIcon}</span>
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                    {Sprachen.mobileClient} <br /> Lenovo K6
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,mobileClient:!this.state.hardwareObj.mobileClient}})}}>{this.state.hardwareObj.mobileClient?onIcon:offIcon}</span>
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {checkIcon}
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                    {Sprachen.mobileClientLizenz}
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'row',width:'160px',justifyContent: 'space-evenly',alignItems:'center'}}>
                    <span className="mobile-client-lizenz" onClick={()=>{if(this.state.mobileClientLizenz < 4 ) this.setState({mobileClientLizenz:this.state.mobileClientLizenz+1})}}>+</span>
                    <span>{this.state.mobileClientLizenz===illimitLizenz?'∞':this.state.mobileClientLizenz}</span>
                    <span className="mobile-client-lizenz" onClick={()=>{if(this.state.mobileClientLizenz > 1)this.setState({mobileClientLizenz:this.state.mobileClientLizenz-1});this.compareWithPro()}}>-</span>
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    2
                  </div>
                  <div className="unlimitiert angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    ∞
                  </div>
              </div>
            </div>
          </div>
        </section>
      </Desktop>
      <Tablet>
        <section style={{
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#e8e8ec',
          textAlign:this.lang==='ar'?'right':'left',
          direction: this.lang==='ar'?'rtl':'ltr'
        }} id="preise" className="_tablet">

        <div className="xs_width">
          <h1>{Sprachen.preisModel}</h1>
          <div className="assemblyYourPOS"><p >{Sprachen.assembleYourCashRegisterFromOurComponentsAccordingToYourNeeds}</p></div>
          <div className="_SitThW_padding">
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'255px',width:'100%',marginTop:'20px'}}>
                <div className="angebot angebot-basis" style={{display:'flex',flexDirection:'column',height:'185px',width:'100px',justifyContent:'center',alignItems:'center',backgroundColor:'#f3f3f5'}}>
                  <div style={{color:'gray',flex:1.3}}><p>BASIS</p></div>
                  <div style={{color:'black',flex:1}}><p>{preis}</p></div>
                  <div style={{flex:1}}><p></p></div>
                </div>

                <div className="angebot angebot-pro"  style={{display:'flex',flexDirection:'column',height:'185px',width:'100px',backgroundColor:'#1159bc',justifyContent:'center',alignItems:'center'}}>
                  <div style={{color:'white',flex:1.3}}><p>PRO</p></div>
                  <div style={{color:'white',flex:1}}><p>{this.umrechneCurrency(proPreis)}</p></div>
                  <div style={{flex:1}}><p></p></div>
                </div>
                <div className="angebot angebot-pro-x"  style={{display:'flex',flexDirection:'column',height:'185px',width:'100px',backgroundColor:'rgb(29, 29, 29)',justifyContent:'center',alignItems:'center'}}>
                  <div style={{color:'white',flex:1.3}}><p>PRO+</p></div>
                  <div style={{color:'white',flex:1}}><p>{this.umrechneCurrency(UltimatePreis)}</p></div>
                  <div style={{flex:1}}><p></p></div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.serverAndRfidReader} <br /> Raspberrypi 3 + Chafon CF-RS103
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.basisTablet} <br /> Lenovo TAB2 A10-30
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,basisTablet:!this.state.hardwareObj.basisTablet}})}}>{this.state.hardwareObj.basisTablet?onIcon:offIcon}</span>
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.basisHalter} <br /> Brateck® - Universelle Halterung
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,basisHalter:!this.state.hardwareObj.basisHalter}})}}>{this.state.hardwareObj.basisHalter?onIcon:offIcon}</span>
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.epsonDrucker} <br /> Epson TM-T20II
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,drucker:!this.state.hardwareObj.drucker}})}}>{this.state.hardwareObj.drucker?onIcon:offIcon}</span>
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.mobileClient} <br /> Lenovo K6
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,mobileClient:!this.state.hardwareObj.mobileClient}})}}>{this.state.hardwareObj.mobileClient?onIcon:offIcon}</span>
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.mobileClientLizenz}
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'row',width:'100px',justifyContent: 'space-evenly',alignItems:'center'}}>
                  <span className="mobile-client-lizenz" onClick={()=>{if(this.state.mobileClientLizenz < 4 ) this.setState({mobileClientLizenz:this.state.mobileClientLizenz+1})}}>+</span>
                  <span>{this.state.mobileClientLizenz===illimitLizenz?'∞':this.state.mobileClientLizenz}</span>
                  <span className="mobile-client-lizenz" onClick={()=>{if(this.state.mobileClientLizenz > 1)this.setState({mobileClientLizenz:this.state.mobileClientLizenz-1});this.compareWithPro()}}>-</span>
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  2
                </div>
                <div className="unlimitiert angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  ∞
                </div>
            </div>
          </div>

        </div>
        </section>
      </Tablet>
      <Mobile>
      <section style={{
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#e8e8ec',
          textAlign:this.lang==='ar'?'right':'left',
          direction: this.lang==='ar'?'rtl':'ltr'
        }} id="preise" className="_desktop">

        <div className="xs_width preise-mobile">
          <h1>{Sprachen.preisModel}</h1>
          <div className="assemblyYourPOS"><p >{Sprachen.assembleYourCashRegisterFromOurComponentsAccordingToYourNeeds}</p></div>
          <div className="_SitThW_padding">
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'150px',width:'100%',marginTop:'20px'}}>
                <div className="angebot-mbile angebot-basis" style={{display:'flex',flexDirection:'column',height:'150px',width:'50px',justifyContent:'center',alignItems:'center',backgroundColor:'#f3f3f5'}}>
                  <div style={{color:'gray',flex:1.3}}><p>BASIS</p></div>
                  <div style={{color:'black',flex:1}}><p>{preis}</p></div>
                  <div style={{flex:1}}><p></p></div>
                </div>

                <div className="angebot-mbile angebot-pro"  style={{display:'flex',flexDirection:'column',height:'150px',width:'50px',backgroundColor:'#1159bc',justifyContent:'center',alignItems:'center'}}>
                  <div style={{color:'white',flex:1.3}}><p>PRO</p></div>
                  <div style={{color:'white',flex:1}}><p>620 €</p></div>
                  <div style={{flex:1}}><p></p></div>
                </div>
                <div className="angebot-mbile angebot-pro-x"  style={{display:'flex',flexDirection:'column',height:'150px',width:'50px',backgroundColor:'rgb(29, 29, 29)',justifyContent:'center',alignItems:'center'}}>
                  <div style={{color:'white',flex:1.3}}><p>PRO+</p></div>
                  <div style={{color:'white',flex:1}}><p>660 €</p></div>
                  <div style={{flex:1}}><p></p></div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'25px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.serverAndRfidReader} <br /> Raspberrypi 3 + Chafon CF-RS103
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.basisTablet} <br /> Lenovo TAB2 A10-30
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,basisTablet:!this.state.hardwareObj.basisTablet}})}}>{this.state.hardwareObj.basisTablet?onIcon:offIcon}</span>
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.basisHalter} <br /> Brateck® - Universelle Halterung
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,basisHalter:!this.state.hardwareObj.basisHalter}})}}>{this.state.hardwareObj.basisHalter?onIcon:offIcon}</span>
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.epsonDrucker} <br /> Epson TM-T20II
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,drucker:!this.state.hardwareObj.drucker}})}}>{this.state.hardwareObj.drucker?onIcon:offIcon}</span>
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.mobileClient} <br /> Lenovo K6
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                <span className="onOffIcon" onClick={()=>{this.setState({hardwareObj:{...this.state.hardwareObj,mobileClient:!this.state.hardwareObj.mobileClient}})}}>{this.state.hardwareObj.mobileClient?onIcon:offIcon}</span>
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',minHeight:'55px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center'}}>
                  {Sprachen.mobileClientLizenz}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'row',width:'50px',justifyContent: 'space-evenly',alignItems:'center'}}>
                  <span className="mobile-client-lizenz" onClick={()=>{if(this.state.mobileClientLizenz < 4 ) this.setState({mobileClientLizenz:this.state.mobileClientLizenz+1})}}>+</span>
                  <span style={{padding:'0 0px',overflow:'hidden'}}>{this.state.mobileClientLizenz===illimitLizenz?'∞':this.state.mobileClientLizenz}</span>
                  <span className="mobile-client-lizenz" onClick={()=>{if(this.state.mobileClientLizenz > 1)this.setState({mobileClientLizenz:this.state.mobileClientLizenz-1});this.compareWithPro()}}>-</span>
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  2
                </div>
                <div className="unlimitiert angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'50px',justifyContent:'center',alignItems:'center'}}>
                  ∞
                </div>
            </div>
          </div>
        </div>
      </section>
      </Mobile>
    </div>)
  }
}

export default Preise;
