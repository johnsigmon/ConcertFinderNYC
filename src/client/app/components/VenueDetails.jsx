import React, { PropTypes } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

function VenueDetails (props) {
  return (
  <section>

    {props.venues.map((venue,i) => {

      return (
        <div key={i} className="venues" >
          <Grid>
            <Row style={{"height" : "60px" }}>
              <Col xs={12} >
                <h3 >{venue.name}</h3>
              </Col>
            </Row>
            <Row>

              <Col xs={3}>
                <p className="lead">{venue.address}</p>
                <p className="lead">{venue.extended_address}</p>
                <p className="lead">{venue.url}</p>
              </Col>

            </Row>
          </Grid>
        </div>
      )
    })}

</section>
)
}


export default VenueDetails;
