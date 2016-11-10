import React, { PropTypes } from 'react';
import Search from '../components/Search.jsx';
import DatePicker from 'react-datepicker';
import moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');

const SearchContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      currentSearch : '',
      startDate: moment()
    }
  },
  handleSubmitSearch(e) {
    e.preventDefault();
    let currentSearch = this.state.currentSearch;

    console.log(currentSearch)

    this.setState({
      currentSearch: ''
    })
console.log('HANDLE SUBMIT')


      this.context.router.push({
        pathname: '/results',
        query: {
          q: currentSearch

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
      startDate: date
    })
  },
  render(){
    return(
      <div>
      <Search
        onSubmitSearch={this.handleSubmitSearch}
        onUpdateSearch={this.handleUpdateSearch}
        currentSearch={this.state.currentSearch}
        />
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleCalendarChange}
      />
      </div>
    )
  }
});

module.exports = SearchContainer;
