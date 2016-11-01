import React from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap'

const ResultsDos = props=>
    <div>
      {props.events.map((event,i) => {
        if(event.performers[0].image) {
          let date = new Date(event.datetime_local);

          let month = date.getMonth();
          let realmonth = parseInt(month) + 1
          console.log(month);
          let day = date.getDate();
          let hour = date.getHours();
          let minutes = date.getMinutes();

        return (
          <div key={i} className="returns">
          <Grid>
            <Image
            className="img-thumbnail"
            shape="rounded"
            src={event.performers[0].image}
            responsive />
            <h3>{event.title}</h3>
            <p>@ {event.venue.name}</p>
            <p>{realmonth}/{day}</p>
            <p>{hour}: {minutes} PM</p>
            <p>{event.datetime_local}</p>
            <p><a href={event.url} target="_blank" >Check Tickets</a></p>
            <p>{event.venue.location.lat}</p>
            <p>{event.venue.location.lon}</p>
            <p>{event.stats.listing_count}</p>
          </Grid>

          </div>
        )}
      })
      }
    </div>

export default ResultsDos;
