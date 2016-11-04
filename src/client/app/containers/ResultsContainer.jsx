import React from 'react';
import Results from '../components/Results.jsx';
const ResultsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      isLoading: true,
      manresults: [],
      bkresults: []
    }
  },
  render(){
    return(
      <Results />
      )
  }
})

export default ResultsContainer;
