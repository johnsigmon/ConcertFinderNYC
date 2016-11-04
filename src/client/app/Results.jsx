import React from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap'

const Results = props=>
  <div>
    {props.events.map((event,i) => {
      if(event.performers[0].image) {
       let date = new Date(event.datetime_local)
       let month = date.getMonth();
       let realmonth = parseInt(month) + 1
       let day = date.getDate();
       let hour = date.getHours();
       let minutes = date.getMinutes();
       let backgroundDivStyle = {
              "background" : "url("+event.performers[0].image+")",
              "backgroundSize": "cover"
        }
       console.log(month);

      return (
        <div key={i} className="returns" style={backgroundDivStyle} >
          <Grid>
            <Row className="card-head">
              <Col xs={6} >
                <h3>{event.title}</h3>
              </Col>
              <Col xs={6} >
                <h3 className="venue"><span>{realmonth}/{day} </span><a href={event.venue.url} target="_blank" >@ {event.venue.name}</a></h3>
              </Col>
            </Row>
            <Row>
              <Col xs={6} >

              </Col>
              <Col xs={6} >
                <div className="info">
                <p className="cash">Avg. Ticket : <strong>${event.stats.average_price}</strong></p>
                <p className="cash">Lowest Ticket : <strong>${event.stats.lowest_price}</strong></p>
                <p className="cash">Tickets Listed : <strong>{event.stats.listing_count}</strong></p>
                <p><a href={event.url} target="_blank" >Check Tickets</a></p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      )}
    })}
  </div>

export default Results;
