import axios from 'axios';

const id = 'MyKEY';
const param = "&client_id=" + id;

function getCityInfo (search){
  return axios.get('https://api.seatgeek.com/2/events'+ search + param +'&per_page=100')
}
function getCityVenues (city) {
  return axios.get('https://api.seatgeek.com/2/venues'+ city + param)
}

const helpers = {
  getCityInfo(cities) {
    return axios.all(cities.map((search)=> {
      return getCityInfo (search)
    })).then((info) => {
      return info.map((city) => {
        return city.data
      })
    })
    .catch((err)=> {console.warn('Error in getCityInfo: ', err)})
  },
  getCityVenues(city) {
    return getCityVenues (city)
    .then((venues)=> {
      return venues.data.venues
    /*  return venues.venuesmap((venue)=> {
        return venue.data
      })*/
    })
    .catch((err)=> {console.warn('Error in getCityVenues: ', err)})
  }
}

module.exports = helpers;
