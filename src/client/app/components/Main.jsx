import React from 'react';
import Header from './Header.jsx';

const Main = React.createClass({
    render(){
        return (
          <div className="main-container" >
          <Header />
            {this.props.children}
          </div>
        )
    }
})

export default Main;
