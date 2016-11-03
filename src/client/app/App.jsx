'use strict'
import React from 'react';
import ReactDOM from 'react-dom'
import Layout from './Layout.jsx'

export default class App extends React.Component {

  render(){
    return(
      <container>
        <Layout />
      </container>
    )
  }

}

ReactDOM.render(<App/>, document.querySelector('#container'))
