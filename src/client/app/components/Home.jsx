import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass({
    render(){
      let homeSearchStyle= {
        "backgroundColor" : "#3A4660"

      }
        return (
          <div className='jumbotron col-sm-12 text-center' style={homeSearchStyle} >
            <Link to='/search'>
              <button type="button" className="btn btn-lg btn-success">Search</button>
            </Link>
          </div>
        )
    }
})

export default Home;
