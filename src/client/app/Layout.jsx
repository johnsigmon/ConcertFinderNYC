import React, { Component } from "react";
import AjaxAdapter        from '../helpers/ajaxAdapter.js'


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
      console.log(data)
      this.handleChange(currentSearch)
      this.setState({
        results: data,
        searched: true
      })
    })
  }

    render() {

        return (
            <div>
                <h2>Hello World</h2>
            </div>
            )
    }
}
