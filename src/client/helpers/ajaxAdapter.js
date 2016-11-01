  function querySeatGeek(query) {

    let term = query.replace(/\s/,'+');
    let url  = 'https://api.seatgeek.com/2/events?&venue.city=new york&q='+term+'&client_id=NjA2OTc1M3wxNDc3Njc5MDA4'
    return fetch(url).then( res => res.json() );
  }

export default querySeatGeek;
