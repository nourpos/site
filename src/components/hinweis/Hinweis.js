import React from 'react'
import Sprachen from '../../languages/Sprachen'
import './Hinweis.css'

class Hinweis extends React.Component {

  render() {
    let labelStyles={
      marginRight: '15px',
      color: '#fff',
      fontSize: '12px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
    return (<div className="hinweis-body">
      <article style={{
          textAlign: Sprachen.getLanguage() === 'ar'
            ? 'right'
            : 'left',
          direction: Sprachen.getLanguage() === 'ar'
            ? 'right'
            : 'left',
            color:'gray'
        }}>
        <h1>Hinweis</h1>
        <div>
          <p>Dieses Produkt ist in Deutschland nicht erhältlich.</p>
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}>

              <label style={labelStyles}>
                <input type="checkbox" defaultChecked={false} ref="complete" onChange={(event)=>{if(event.target.checked){this.props.dontAskAgain()}}}/> Nicht mehr anzeigen
              </label>
            <p onClick={() => {
                this.props.confirmVorhandHinweisGelesen()
              }} className="weiter">Weiter</p>
          </div>
        </div>
      </article>
    </div>)
  }
}

export default Hinweis;
