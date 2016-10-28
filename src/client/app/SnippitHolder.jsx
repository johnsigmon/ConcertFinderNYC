import React        from 'react';
import AjaxAdapter  from '../helpers/ajaxAdapter.js'

const ajax = new AjaxAdapter(fetch);

export default function Search(props){

  const handleChange = function(e){
    console.log(e.target.value)
    props.onSubmitSearch(e.target.value);
  }

  return (
    <div>
      <select
        name="venues"
        onChange={handleChange}
        value={props.venueCode}
        className="btn btn-danger">
          <option value="">Choose By Venue</option>
          {props.venueData.map(function(venue, id) {
            return <option key={id} value={venue.Code}>{venue.Name}</option>
            })
          }
      </select>


    </div>
  )

}
