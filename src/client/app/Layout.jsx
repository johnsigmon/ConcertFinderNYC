import React, { Component } from "react";
import AjaxAdapter        from '../helpers/ajaxAdapter.js';
import Search from './Search.jsx';
import Results from './Results.jsx';

const ajax = new AjaxAdapter(fetch);

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      searched: false,
      results: []
    }
  }
  handleSubmitSearch(currentSearch) {
    ajax.fullPull(currentSearch).then( data => {
      this.setState({
        searched: true,
        results: data
      })
    })

  }

  render() {
    if(this.state.searched) {
      return (
        <div>
          <h2>Show Data</h2>
          <Search onSubmitSearch={this.handleSubmitSearch.bind(this)}
                 results={this.state.results} />
          <Results results={this.state.results} />
        </div>
      )
    } else {
      return (
        <div>
        <h2>search for a show</h2>
         <Search onSubmitSearch={this.handleSubmitSearch.bind(this)}
                 results={this.state.results} />
        </div>
      )
    }
  }
}

