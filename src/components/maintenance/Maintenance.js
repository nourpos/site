import React from 'react'
import './Maintenance.css'
import Sprachen from '../../languages/Sprachen'

class Maintenance extends React.Component {

  render() {
    let contactAnchor = (<a href="mailto:hello@nourpos.com"> {Sprachen.contactUs}</a>)
    return(
      <article style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left',direction:Sprachen.getLanguage()==='ar'?'right':'left'}}>
        <h1>{Sprachen.weComeBack}</h1>
        <div>
            <p>{Sprachen.formatString(Sprachen.maintenanceText,contactAnchor)}</p>
            <p>&mdash; {Sprachen.theTeam}</p>
        </div>
    </article>
    )
  }
}

export default Maintenance;
