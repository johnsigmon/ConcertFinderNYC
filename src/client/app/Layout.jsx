import React, { Component } from "react";
import querySeatGeek from '../helpers/ajaxAdapter.js';
import bkSeatGeek from '../helpers/bkAdapter.js';
import SearchDos from './SearchDos.jsx';
import ResultsDos from './ResultsDos.jsx';
import MapContainer from './MapContainer.jsx';


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      searched: false,
      manresults: [],
      bkresults: []
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
        manresults: events.events,
        searched: true
      })

    });
    bkSeatGeek(this.state.query).then( bkevents => {
      this.setState({
        bkresults: bkevents.events,
        query: ''
    })
      console.log(this.state);
  })
   /* this.setState({searched: true})*/
  }

  handleSearchToggle(event) {
    this.setState({
      manresults: [],
      bkresults: [],
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
          <SearchDos
            onUpdateSearch={this.handleUpdateSearch.bind(this)}
            onSubmitSearch={this.handleSubmitSearch.bind(this)}
            query={this.state.query}/>
        </a>
        <div className="col-sm-6 manhattan">
          <div className="col-sm-12 text center">
            <h2>Manhattan</h2>
            <ResultsDos
              events={this.state.manresults} />
          </div>
        </div>
        <div className="col-sm-6 brooklyn">
          <div className="col-sm-12 text center">
            <h2>Brooklyn</h2>
            <ResultsDos
              events={this.state.bkresults}
            />
          </div>
        </div>
      </div>
        )
    } else {
    return(
        <div className="jumbotron col-sm-12 text-center">
        <a>
            <h1>Show Finder NYC</h1>
        </a>
         <SearchDos
            onUpdateSearch={this.handleUpdateSearch.bind(this)}
            onSubmitSearch={this.handleSubmitSearch.bind(this)}
            query={this.state.query}/>
            <div>

            </div>

        </div>
        )
    }
  }
}
