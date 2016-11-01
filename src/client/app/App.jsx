'use strict'

// import the libs we need
import React from 'react';
import ReactDOM from 'react-dom'
import Layout from './Layout.jsx'

// create a React Component called _App_
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
