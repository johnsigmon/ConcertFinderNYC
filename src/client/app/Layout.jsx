import React, { Component } from "react";
import querySeatGeek        from '../helpers/ajaxAdapter.js';
import SearchDos from './SearchDos.jsx';
import ResultsDos from './ResultsDos.jsx'



export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      searched: false,
      results: []
    }
  }

  handleUpdateSearch(event) {
    console.log(event.target.value);
    this.setState({
      query: event.target.value
    })
  }
  handleSubmitSearch(event) {
    event.preventDefault();
    querySeatGeek(this.state.query).then( events => {

      this.setState({
        results: events.events,
        query: "",
        searched: true
      })
      console.log(this.state)
    })
   /* this.setState({searched: true})*/
  }

  handleSearchToggle(event) {
    this.setState({
      results: [],
      query: '',
      searched: false
    });
  }

  render() {
    if (this.state.searched) {
      return(
        <div className="jumbotron col-sm-12 text-center">
          <a onClick={this.handleSearchToggle.bind(this)}>
            <h1>Show Finder NYC</h1>
          </a>
          <div className="col-sm-12">
          <ResultsDos
          events={this.state.results}
          />
          </div>
        </div>
        )
    } else {
    return(
        <div>
        <div className="jumbotron">Show Finder NYC
        </div>
        <a>
            <h1>Show Finder NYC</h1>
        </a>
         <SearchDos
            onUpdateSearch={this.handleUpdateSearch.bind(this)}
            onSubmitSearch={this.handleSubmitSearch.bind(this)}
            query={this.state.query}/>

        </div>
        )
    }
  }
}
