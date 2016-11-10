import React, { PropTypes } from 'react';

function EventDetailsWrapper (props) {
  return (
     <div className="col-sm-12 text-center">
      <h2>{props.header}</h2>
      {props.children}
      </div>
    )
}

export default EventDetailsWrapper;
