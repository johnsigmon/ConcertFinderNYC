import React from 'react';
import { Link } from 'react-router';
import { Grid, Col, Row, Image } from 'react-bootstrap';

const Home = React.createClass({
    render(){
      let homeSearchStyle= {
        "backgroundColor" : "#3A4660"
      }
  let buttonStyle = {
    "backgroundColor" : "#C9AF98",
    "color": "#3A4660",
    "borderRadius" : "10px",
    "height": "200px",
    "width": "100%",
    "fontWeight" : "bolder",
    "fontSize" : "40px"
  }
        return (
          <div className='jumbotron col-sm-12 text-center' style={homeSearchStyle} >
            <Grid>
            <Col xs={5}>
            <Link to='/search'>
              <button type="button" className="btn btn-lg" style={buttonStyle}>Search For Events</button>
            </Link>
            </Col>
            <Col xs={5} xsOffset={1}>
            <Link to='/venues'>
              <button type="button" className="btn btn-lg" style={buttonStyle}>Discover Venues</button>
            </Link>
            </Col>
            </Grid>
          </div>
        )
    }
})

export default Home;
