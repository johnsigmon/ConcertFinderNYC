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



    seatGeekHelper.getCityInfo(['?venue.city=new+york','?venue.city=brooklyn'])
      .then((cities) => {
        console.log('CITIES', cities)

    })
    console.log('COMPDIDMOUNT')
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
