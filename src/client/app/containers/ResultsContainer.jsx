import React, { PropTypes } from 'react';
import Results from '../components/Results.jsx';
import seatGeekHelper from '../utils/seatGeekHelper.js';


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
    return(
      <Results
        isLoading={this.state.isLoading}
        results={this.state.results} />
      )
  }
})

module.exports = ResultsContainer;
