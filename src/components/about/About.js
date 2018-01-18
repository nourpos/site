import React from 'react';


class About extends React.Component {
  shouldComponentUpdate(){
    return false
  }
  render() {
    console.log('kkkk');
    return (
      <div style={{
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#e8e8ec',
        padding:'15px',
        backgroundColor: '#e8e8ec'
      }} id="About" className="_tablet">
        <div className="md_width">
          <h1>About</h1>
        </div>
      </div>
    )
  }
}

export default About;
