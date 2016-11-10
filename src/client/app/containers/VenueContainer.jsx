import React, { PropTypes } from 'react';
import { Grid, Col, Row, DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import ChooseVenue from '../components/ChooseVenue.jsx';
import TopVenues from '../components/TopVenues.jsx'
require('react-datepicker/dist/react-datepicker.css');

const VenueContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      currentCity: ''
    }
  },
  handleSelectCity(city) {
    this.setState({
      currentCity: city
    })
    this.context.router.push({
      pathname: '/topvenues',
      query: {
        city: city
      }
    })
    console.log(city)
  },
  render(){
    return(
      <div>
        <ChooseVenue
          onSelectCity={this.handleSelectCity}
          currentCity= {this.state.currentCity}/>
          {this.state.currentCity && <TopVenues />}
      </div>
    )
  }
});

module.exports = VenueContainer;
