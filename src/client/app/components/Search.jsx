import React, { PropTypes } from 'react';
import { Link } from 'react-router';


function Search(props) {
  let searchBoxStyle = {
    "backgroundColor" : "#C9AF98",
    "color": "#3A4660",
    "marginTop" : "20px",
    "borderRadius" : "20px"
  }

      return (
      <div className="jumbotron col-sm-12 text-center" style={searchBoxStyle}>
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitSearch}>
            <div className="form-group">
            <h3>General Search</h3>
              <input
                onChange={props.onUpdateSearch}
                value={props.currentSearch}
                type="text"
                placeholder="Enter your favorite band, sports team, or genre..."
                className="form-control" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        <p className="lead">Search artists by name or general genres such as "comedy, opera, or folk" for best results!</p>
      </div>
      )
}

Search.propTypes = {
    onSubmitSearch: PropTypes.func.isRequired,
    onUpdateSearch: PropTypes.func.isRequired,
    currentSearch: PropTypes.string.isRequired
  }






export default Search;
