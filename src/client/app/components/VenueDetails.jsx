import React, { PropTypes } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

function VenueDetails (props) {
  return (
  <section>

    {props.venues.map((venue,i) => {
      if(venue.stats.event_count) {
      return (
        <div key={i} className="venues" >
          <Grid>
            <Row style={{"height" : "60px" }}>
              <Col xs={12} >
                <h3 >{venue.name}</h3>
              </Col>
            </Row>
            <Row>

              <Col xs={12}>
                <p className="lead">Number of Upcoming Events: {venue.stats.event_count}</p>
                <p className="lead">{venue.address}</p>
                <p className="lead">{venue.extended_address}</p>
                <p className="lead"><a href={venue.url} target="_blank">View Upcoming Events</a></p>
              </Col>

            </Row>
          </Grid>
        </div>
      )}
    })}

</section>
)
}


export default VenueDetails;
