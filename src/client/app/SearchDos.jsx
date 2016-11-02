import React from 'react';
import ajaxAdapterDos from '../helpers/ajaxAdapterDos.js';

const ajax = new ajaxAdapterDos(fetch);

const SearchDos = props =>
  <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
    <div className="col-sm-12">
      <form method="post" action="/api" onSubmit={props.onSubmitSearch}>
          <input
            onChange={props.onUpdateSearch}
            value={props.query}
            type="text"
            name="search"
            placeholder="Enter your favorite band or sports team..."
            className="form-control" />
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
