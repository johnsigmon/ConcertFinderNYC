import axios from 'axios';

const id = 'NjA2OTc1M3wxNDc3Njc5MDA4';
const param = "&client_id=" + id;

function getCityInfo (search){
  return axios.get('https://api.seatgeek.com/2/events'+ search + param +'&per_page=100')
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
    .catch((err)=> {console.warn('Error in getPlayersInfo: ', err)})
  }
}

module.exports = helpers;
