import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import Map                  from './Map.jsx';
import Places               from './Places.jsx';
import superagent           from 'superagent';


export default class MapContainer extends Component {

    constructor(){
        super()
        this.state = {
          venues: []
        }
    }
    componentDidMount(){
      console.log('componentDidMount');
      const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.7575285,-73.9884469&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ';
      superagent
        .get(url)
        .query()
        .set('Accept', 'text/json')
        .end((error, response) => {

          const venues = response.body.response.venues;
          console.log(JSON.stringify(venues))
          this.setState({
            venues:venues
          })
        })


    }
    render(){
        const location = {
          lat: 40.7575285,
          lng: -73.9884469
        }

        return (
            <div>
              This is the React APP!
              <div style={{width:300, height:600, background:'red'}}>
              <Map center={location} markers={this.state.venues} />
              </div>
              <Places venues={this.state.venues}/>
            </div>
        )
    }
}

