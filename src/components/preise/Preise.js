import React, {Component} from 'react';
import Responsive from 'react-responsive';

import Sprachen from '../../languages/Sprachen'
import './Preise.css'


var FontAwesome = require('react-fontawesome')
const checkIcon = (<FontAwesome className="check" name="check" size="1x"/>)



const Desktop = props => <Responsive {...props} minWidth={992}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767}/>;


class Preise extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (<div>
      <Desktop>
        <section style={{
            flexDirection: 'column',
            minHeight: this.props.minHeight,
            backgroundColor: '#e8e8ec',
            textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
            direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
          }} id="preise" className="_desktop">

          <div className="md_width">
            <h1>{Sprachen.preisModel}</h1>
            <div className="_SitThW_padding">
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'255px',width:'100%',marginTop:'20px'}}>
                  <div className="angebot angebot-basis" style={{display:'flex',flexDirection:'column',height:'185px',width:'160px',justifyContent:'center',alignItems:'center',backgroundColor:'#f3f3f5'}}>
                    <div style={{color:'gray',flex:1.3}}><p>BASIS</p></div>
                    <div style={{color:'black',flex:1}}><p>400 €</p></div>
                    <div style={{color:'white',flex:1}}><p></p></div>
                  </div>

                  <div className="angebot angebot-pro"  style={{display:'flex',flexDirection:'column',height:'185px',width:'160px',backgroundColor:'#1159bc',justifyContent:'center',alignItems:'center'}}>
                    <div style={{color:'white',flex:1.3}}><p>PRO</p></div>
                    <div style={{color:'white',flex:1}}><p>500 €</p></div>
                    <div style={{color:'white',flex:1}}><p></p></div>
                  </div>
                  <div className="angebot angebot-pro-x"  style={{display:'flex',flexDirection:'column',height:'185px',width:'160px',backgroundColor:'rgb(29, 29, 29)',justifyContent:'center',alignItems:'center'}}>
                    <div style={{color:'white',flex:1.3}}><p>PRO+</p></div>
                    <div style={{color:'white',flex:1}}><p>600 €</p></div>
                    <div style={{color:'white',flex:1}}><p></p></div>
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                    {Sprachen.serverAndRfidReader}
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
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                    {Sprachen.basisTablet}
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
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                    {Sprachen.epsonDrucker}
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
              <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                  <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                    {Sprachen.orderMan}
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    1
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    4
                  </div>
                  <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'160px',justifyContent:'center',alignItems:'center'}}>
                    {Sprachen.unlimitiert}
                  </div>
              </div>
            </div>
          </div>
        </section>
      </Desktop>
      <Tablet>
        <section style={{
          flexDirection: 'column',
          minHeight: this.props.minHeight,
          backgroundColor: '#e8e8ec',
          textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
          direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
        }} id="preise" className="_tablet">

        <div className="xs_width">
          <h1>{Sprachen.preisModel}</h1>
          <div className="_SitThW_padding">
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'255px',width:'100%',marginTop:'20px'}}>
                <div className="angebot angebot-basis" style={{display:'flex',flexDirection:'column',height:'185px',width:'100px',justifyContent:'center',alignItems:'center',backgroundColor:'#f3f3f5'}}>
                  <div style={{color:'gray',flex:1.3}}><p>BASIS</p></div>
                  <div style={{color:'black',flex:1}}><p>400 €</p></div>
                  <div style={{color:'white',flex:1}}><p></p></div>
                </div>

                <div className="angebot angebot-pro"  style={{display:'flex',flexDirection:'column',height:'185px',width:'100px',backgroundColor:'#1159bc',justifyContent:'center',alignItems:'center'}}>
                  <div style={{color:'white',flex:1.3}}><p>PRO</p></div>
                  <div style={{color:'white',flex:1}}><p>500 €</p></div>
                  <div style={{color:'white',flex:1}}><p></p></div>
                </div>
                <div className="angebot angebot-pro-x"  style={{display:'flex',flexDirection:'column',height:'185px',width:'100px',backgroundColor:'rgb(29, 29, 29)',justifyContent:'center',alignItems:'center'}}>
                  <div style={{color:'white',flex:1.3}}><p>PRO+</p></div>
                  <div style={{color:'white',flex:1}}><p>600 €</p></div>
                  <div style={{color:'white',flex:1}}><p></p></div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                  {Sprachen.serverAndRfidReader}
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
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                  {Sprachen.basisTablet}
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
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                  {Sprachen.epsonDrucker}
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
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-row angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                  {Sprachen.orderMan}
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  1
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  4
                </div>
                <div className="angebot-row angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'100px',justifyContent:'center',alignItems:'center'}}>
                  {Sprachen.unlimitiert}
                </div>
            </div>
          </div>

        </div>
        </section>
      </Tablet>
      <Mobile>
      <section style={{
          flexDirection: 'column',
          minHeight: this.props.minHeight,
          backgroundColor: '#e8e8ec',
          textAlign:Sprachen.getLanguage()==='ar'?'right':'left',
          direction: Sprachen.getLanguage()==='ar'?'rtl':'ltr'
        }} id="preise" className="_desktop">

        <div className="xs_width">
          <h1>{Sprachen.preisModel}</h1>
          <div className="_SitThW_padding">
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'150px',width:'100%',marginTop:'20px'}}>
                <div className="angebot-mbile angebot-basis" style={{display:'flex',flexDirection:'column',height:'150px',width:'65px',justifyContent:'center',alignItems:'center',backgroundColor:'#f3f3f5'}}>
                  <div style={{color:'gray',flex:1.3}}><p>BASIS</p></div>
                  <div style={{color:'black',flex:1}}><p>400 €</p></div>
                  <div style={{color:'white',flex:1}}><p></p></div>
                </div>

                <div className="angebot-mbile angebot-pro"  style={{display:'flex',flexDirection:'column',height:'150px',width:'65px',backgroundColor:'#1159bc',justifyContent:'center',alignItems:'center'}}>
                  <div style={{color:'white',flex:1.3}}><p>PRO</p></div>
                  <div style={{color:'white',flex:1}}><p>500 €</p></div>
                  <div style={{color:'white',flex:1}}><p></p></div>
                </div>
                <div className="angebot-mbile angebot-pro-x"  style={{display:'flex',flexDirection:'column',height:'150px',width:'65px',backgroundColor:'rgb(29, 29, 29)',justifyContent:'center',alignItems:'center'}}>
                  <div style={{color:'white',flex:1.3}}><p>PRO+</p></div>
                  <div style={{color:'white',flex:1}}><p>600 €</p></div>
                  <div style={{color:'white',flex:1}}><p></p></div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'25px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                  {Sprachen.serverAndRfidReader}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                  {Sprachen.basisTablet}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                  {Sprachen.epsonDrucker}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {checkIcon}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'95px',width:'100%',marginTop:'20px',backgroundColor:'#f3f3f5',borderRadius:'7px'}}>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{display:'flex',flexDirection:'column',flex:1,justifyContent: 'center',alignItems:'left'}}>
                  {Sprachen.orderMan}
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"gray",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  1
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"#1159bc",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  4
                </div>
                <div className="angebot-mbile-row-mbile angebot-row-basis" style={{color:"rgb(29, 29, 29)",display:'flex',flexDirection:'column',width:'55px',justifyContent:'center',alignItems:'center'}}>
                  {Sprachen.unlimitiert}
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
