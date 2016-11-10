import React, { PropTypes } from 'react';
import seatGeekHelper from '../utils/seatGeekHelper.js';
import { Link } from 'react-router';
import TopVenues from '../components/TopVenues.jsx';

const TopVenuesContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      venuesLoading: true,
      venues: [],
    }
  },
  componentDidMount(){
    let query = this.props.location.query;
    console.log(query)

    seatGeekHelper.getCityVenues('?city=' + query.city)
      .then((currentVenues) => {
        console.log('VENUES', currentVenues)
        this.setState({
          venuesLoading: false,
          venues: currentVenues,
        })
    })
  },
  render(){
    let searchLinkStyle = {
      "backgroundColor" : "#3A4660",
      "paddingTop" : "15px",
      "marginBottom" : "15px"
    }
       let buttonStyle = {
    "backgroundColor" : "#C9AF98",
    "color": "#3A4660",
    "borderRadius" : "10px"
  }
    return(
      <div className="text-center">
      <div style={searchLinkStyle}>
        <Link to='/venues'>
          <button type="button" className="btn btn-lg btn-success" style={buttonStyle}>Search Again</button>
        </Link>
        </div>
      <TopVenues
        venuesLoading={this.state.venuesLoading}
        venues={this.state.venues} />
      </div>
      )
  }
})

export default TopVenuesContainer
