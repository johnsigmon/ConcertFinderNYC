import React from 'react';
import { Col } from 'react-bootstrap'

const Header = React.createClass({
    render(){
  let imgURL = '../images/NYC.png'
  let backgroundHeaderStyle = {
      "background" : "url("+imgURL+")",
      "backgroundSize": "cover",
      "color": "#3A4660",
      "paddingTop" : "32px",
      "paddingBottom" : "0",
      "marginBottom" : "15px"
    }
  let titleStyle = {
    "backgroundColor" : "#C9AF98",
    "borderRadius" : "30px"
  }
        return (
          <div className='jumbotron header col-sm-12'  style={backgroundHeaderStyle}>
            <Col xs={4} style={titleStyle}>
            <h1>Event Finder NYC</h1>
            <p className="lead">Simple no frills event search for NYC and BK.</p>
            </Col>

          </div>
        )
    }
})

export default Header;
