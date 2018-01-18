import React, {Component} from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div style={{width:'100%',minHeight:"100vh",justifyContent:'center',alignItems:'center',display:'flex'}}>
        <p style={{color:'#fff'}}>Loading ...</p>
      </div>

    );
  }
}

export default Loader;
