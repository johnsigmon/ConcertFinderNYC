import React, { PropTypes } from 'react';
import EventDetails from './EventDetails.jsx'
import EventDetailsWrapper from './EventDetailsWrapper.jsx'
import { Grid, Col, Row, Image } from 'react-bootstrap'

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function Results (props) {
  let resultsContainerStyle = {
    "backgroundColor" : "#C9AF98",
    "color": "#3A4660",
    "paddingTop" : "15px",
    "marginBottom" : "15px"
    }


  return props.isLoading === true
        ? <p>LOADING</p>
        : <div className="jumbotron col-sm-12" style={resultsContainerStyle}>
          <h2>What's coming up!</h2>
          <Grid>
            <EventDetailsWrapper header="NYC">
              <EventDetails events={props.results[0].events} />
            </EventDetailsWrapper>

            <EventDetailsWrapper header="BK">
              <EventDetails events={props.results[1].events} />
            </EventDetailsWrapper>
            </Grid>

        </div>
      }

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired
}
export default Results;
