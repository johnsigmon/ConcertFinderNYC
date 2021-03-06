import React, { PropTypes } from 'react';
import Results from '../components/Results.jsx';
import seatGeekHelper from '../utils/seatGeekHelper.js';
import { Link } from 'react-router';

const ResultsContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      isLoading: true,
      results: [],
    }
  },
  componentDidMount(){
    let query = this.props.location.query;
    console.log(query)
    console.log(`${query.q}`)

    seatGeekHelper.getCityInfo(['?q=' + query.q +'&venue.city=new+york', '?q=' + query.q + '&venue.city=brooklyn'])
      .then((cities) => {
        console.log('CITIES', cities)
        this.setState({
          isLoading: false,
          results: [cities[0], cities[1]]
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
"paddingTop" : "15px",
"marginBottom" : "15px"
    }
    return(
      <div className="text-center">
      <div style={searchLinkStyle}>
        <Link to='/search'>
          <button type="button" className="btn btn-lg btn-success" style={buttonStyle}>Search Again</button>
        </Link>
        </div>
      <Results
        isLoading={this.state.isLoading}
        results={this.state.results} />
      </div>
      )
  }
})

export default ResultsContainer;
