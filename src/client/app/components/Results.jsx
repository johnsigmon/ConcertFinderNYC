import React from 'react';

function Results (props) {
  return props.isLoading === true
        ? <p>LOADING</p>
        : <p>SHOW RESULTS</p>
      }
export default Results;
