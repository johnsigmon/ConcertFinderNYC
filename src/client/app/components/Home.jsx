import React from 'react';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const Home = React.createClass({
    render(){
        return (
          <div className='jumbotron col-sm-12 text-center'>
            <h1>Show Finder NYC</h1>
            <p className="lead">Some fancy motto</p>
            <Link to='/search'>
              <button type="button" className="btn btn-lg btn-success">Search</button>
            </Link>
          </div>
        )
    }
})

export default Home;
