import React from 'react';

export default function Results(props) {
    return (
      <div>
        <h2>Events found.</h2>
          <section>
            <h3>{props.results.events[0].title}</h3>
          </section>
      </div>
        )

}
