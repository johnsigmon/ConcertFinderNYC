import React from 'react';

import ajaxAdapterDos from '../helpers/ajaxAdapterDos.js';

const ajax = new ajaxAdapterDos(fetch);


export default function SearchDos(props) {
const handleChange = function(e){
    console.log(e.target.value)
    props.onSubmitSearch(e.target.value);
  }

return (
  <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
    <div className="col-sm-12">
      <form method="get">
        <div className="form-group">
          <input
            onChange={handleChange}
            type="text"
            name='search'
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
)
}
