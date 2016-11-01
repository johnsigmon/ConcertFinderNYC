import React from 'react';

const SearchDos = props =>
  <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
    <div className="col-sm-12">
      <form onSubmit={props.onSubmitSearch}>
        <div className="form-group">
          <input
          onChange={props.onUpdateSearch}
          value={props.query}
          type="text"
          placeholder="Enter your favorite band or sports team..."
          className="form-control" />
        </div>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <button
          className="btn btn-block btn-primary"
          type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  </div>



export default SearchDos;
