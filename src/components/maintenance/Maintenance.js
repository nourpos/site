import React from 'react'
import Sprachen from '../../languages/Sprachen'
import './Maintenance.css'

class Maintenance extends React.Component {

  render() {

    let contactAnchor = (<a href="mailto:hello@nourpos.com"> {Sprachen.contactUs}</a>)
    return(
      <div className="maintenance-body">
      <article style={{textAlign:Sprachen.getLanguage()==='ar'?'right':'left',direction:Sprachen.getLanguage()==='ar'?'right':'left'}}>
        <h1>{Sprachen.weComeBack}</h1>
        <div>
            <p>{Sprachen.formatString(Sprachen.maintenanceText,contactAnchor)}</p>
            <p>&mdash; {Sprachen.theTeam}</p>
        </div>
    </article>
    </div>
    )
  }
}

export default Maintenance;
