import axios from 'axios';

const id = 'MYKEY';
const param = "&client_id=" + id;

function getCityInfo (search){
  return axios.get('https://api.seatgeek.com/2/events'+ search + param +'&per_page=100')
}
function getPerformerInfo (id) {
  return axios.get('https://api.seatgeek.com/2/performers'+ id + param)
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
  }
}

module.exports = helpers;
