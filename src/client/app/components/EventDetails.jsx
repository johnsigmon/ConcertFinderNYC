import React, { PropTypes } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

function EventDetails (props) {
  return (
  <section>

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
              "backgroundSize": "cover",
              "paddingRight" : "0",

        }
        let corners = {
          "borderRadius": "30px",
          "backgroundColor": "white"
        }
        let overflowCatch = {
          "overflow": "hidden",
          "textOverflow": "ellipsis"
        }
       console.log(month);

      return (
        <div key={i} className="returns" style={backgroundDivStyle} >
          <Grid>
            <Row style={{"height" : "60px" }}className="card-head">
              <Col xs={12} >
                <h3 style={overflowCatch} >{event.title}</h3>
              </Col>
            </Row>
            <Row>

              <Col xs={3} style={corners}>
                <h3>{realmonth}/{day}</h3>
              </Col>

              <Col xs={12}>
                <div className="info" >
                {event.stats.listing_count &&
                  <div style={{"float" : "right"}}>
                  <p className="cash">Tickets Listed : <strong>{event.stats.listing_count}</strong></p>
                  <p className="cash">Avg. Ticket : <strong>${event.stats.average_price}</strong></p>
                  <p className="cash">Lowest Ticket : <strong>${event.stats.lowest_price}</strong></p>
                  <p><a href={event.url} target="_blank" >Check Tickets</a></p>
                </div>
                }
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} xsOffset={3} style={corners}>

              <h3 className="venue"><a href={event.venue.url} target="_blank" >@ {event.venue.name}</a></h3>
              </Col>
            </Row>
          </Grid>
        </div>
      )}
    })}

</section>
)
}

/*UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  })
}*/

export default EventDetails;
