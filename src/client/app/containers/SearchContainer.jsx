import React, { PropTypes } from 'react';
import { Grid, Col, Row } from 'react-bootstrap'
import Search from '../components/Search.jsx';
import DatePicker from 'react-datepicker';
import moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');
let calStyle = {
    "backgroundColor" : "#C9AF98",
    "color": "#3A4660",
    "marginTop" : "20px",
    "borderRadius" : "20px"
  }
const SearchContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      currentSearch : '',
      currentDate: moment()
    }
  },
  handleSubmitSearch(e) {
    e.preventDefault();
    let currentSearch = this.state.currentSearch;
    let currentDate   = this.state.currentDate;
    let formattedDate = currentDate.format("YYYY-MM-D")
    console.log(currentSearch)
    console.log(formattedDate)

    this.setState({
      currentSearch: ''
    })
console.log('HANDLE SUBMIT')

      this.context.router.push({
        pathname: '/results',
        query: {
          q: currentSearch,
          datetime_utc: formattedDate
        }
      })

      console.log(this.context.router)
  },
  handleUpdateSearch(e) {
    this.setState({
      currentSearch: e.target.value
    })
  },
  handleCalendarChange(date) {
    this.setState({
      currentDate: date
    })
  },
  render(){
    return(
      <div>
      <Grid>
        <Col xs={8}>
        <Search
          onSubmitSearch={this.handleSubmitSearch}
          onUpdateSearch={this.handleUpdateSearch}
          currentSearch={this.state.currentSearch}
          />
        </Col>
        <Col xs={4} className="text-center" style={calStyle}>
          <h2>Choose a date.</h2>
          <DatePicker
            selected={this.state.currentDate}
            onChange={this.handleCalendarChange}
            className="form-control"
          />
        </Col>
      </Grid>
      </div>
    )
  }
});

module.exports = SearchContainer;
