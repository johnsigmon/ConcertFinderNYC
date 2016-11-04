import React from 'react';
import Search from '../components/Search.jsx'

const SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      currentSearch : ''
    }
  },
  handleUpdateSearch(e) {
    this.setState({
      currentSearch: e.target.value
    })
  },
  handleSubmitSearch(e) {
    e.preventDefault();
    let currentSearch = this.state.currentSearch;
    this.setState({
      currentSearch: ''
    })

  },
  render(){
    return(
      <Search
        onSubmitSearch={this.handleSubmitSearch}
        onUpdateSearch={this.handleUpdateSearch}
        currentSearch={this.state.currentSearch}/>

      )
  }
});

export default SearchContainer
