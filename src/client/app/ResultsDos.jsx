import React from 'react';

const ResultsDos = props=>
    <div>
      {props.events.map((event,i) => {
        return (
          <div key={i}>
          <section>
            <img
            className="img-thumbnail"
            src={event.performers[0].image} />
            <p>{event.title}</p>
            <p>{event.venue.name}</p>
            <p>{event.datetime_local}</p>
            <p><a href={event.url} target="_blank" >Check Tickets</a></p>
            <p>{event.venue.location.lat}</p>
            <p>{event.venue.location.lon}</p>
          </section>

          </div>
        )
      })
      }
    </div>

export default ResultsDos;
