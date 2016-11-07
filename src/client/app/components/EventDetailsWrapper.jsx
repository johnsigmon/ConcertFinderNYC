import React, { PropTypes } from 'react';

function EventDetailsWrapper (props) {
  return (
     <div className="col-sm-6">
      <h3>NYC</h3>
      {props.children}
      </div>
    )
}

export default EventDetailsWrapper;
