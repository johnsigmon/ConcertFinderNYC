import React, { PropTypes } from 'react';
import Search from '../components/Search.jsx'

const SearchContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      currentSearch : ''
    }
  },
  handleSubmitSearch(e) {
    e.preventDefault();
    let currentSearch = this.state.currentSearch;

    console.log(currentSearch)

    this.setState({
      currentSearch: ''
    })
console.log('HANDLE SUBMIT')


      this.context.router.push({
        pathname: '/results',
        query: {
          q: currentSearch

        }
      })

      console.log(this.context.router)
  },
  handleUpdateSearch(e) {
    this.setState({
      currentSearch: e.target.value
    })
  },
  render(){
    return(
      <Search
        onSubmitSearch={this.handleSubmitSearch}
        onUpdateSearch={this.handleUpdateSearch}
        currentSearch={this.state.currentSearch}
        />
    )
  }
});

module.exports = SearchContainer;
