import React from 'react';

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function Results (props) {
  console.log(props.results)
  return props.isLoading === true
        ? <p>LOADING</p>
        : <div>SHOW RESULTS! : {puke(props)} </div>
      }
export default Results;
