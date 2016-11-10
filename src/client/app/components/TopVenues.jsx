import React, { PropTypes } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap'
import VenueDetailsWrapper from './VenueDetailsWrapper.jsx'
import VenueDetails from './VenueDetails.jsx'
function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function TopVenues (props) {
  let resultsContainerStyle = {
    "backgroundColor" : "#C9AF98",
    "color": "#3A4660",
    "paddingTop" : "15px",
    "marginBottom" : "15px"
    }


  return props.venuesLoading === true
        ? <p>LOADING</p>
        : <div className="jumbotron col-sm-12" style={resultsContainerStyle}>
          <h2>Top Venues in the area!</h2>
          <Grid>
          <h2>Venue Results</h2>
            <VenueDetailsWrapper header='Replace me with current city' >
              <VenueDetails venues={props.venues} />
            </VenueDetailsWrapper>
          </Grid>

        </div>
      }

TopVenues.propTypes = {
  venuesLoading: PropTypes.bool.isRequired,
  venues: PropTypes.array.isRequired
}
export default TopVenues;
