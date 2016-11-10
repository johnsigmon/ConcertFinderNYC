import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';


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
  let homeButton = {
    "backgroundColor" : "#3A4660",
    "color": "#C9AF98",
    "borderRadius" : "10px"
  }
        return (
          <div className='jumbotron header col-sm-12'  style={backgroundHeaderStyle}>
            <Col xs={4} style={titleStyle}>
            <h1>Event Finder NYC</h1>
            <p className="lead">Simple no frills event search for NYC and BK.</p>
            </Col>
            <Col xs={1} xsOffset={7}>
              <Link to='/'>
              <button type="button" className="btn btn-lg" style={homeButton}>Home</button>
            </Link>
            </Col>

          </div>
        )
    }
})

export default Header;
