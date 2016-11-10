import React, { PropTypes } from 'react';
import { Grid, Col, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
function ChooseVenue (props) {

  let calStyle = {
    "backgroundColor" : "#C9AF98",
    "color": "#3A4660",
    "marginTop" : "20px",
    "borderRadius" : "20px"
  }
  return (
      <Grid>
        <Col xs={2} className="text-center" style={calStyle} >
          <h3>Pick A City</h3>
            <ButtonToolbar>
              <DropdownButton bsStyle="default" title="Choose A City" noCaret id="dropdown-no-caret" onSelect={props.onSelectCity}>
                <MenuItem eventKey="New York">New York</MenuItem>
                <MenuItem eventKey="Brooklyn">Brooklyn</MenuItem>
                <MenuItem eventKey="Boston">Boston</MenuItem>
                <MenuItem eventKey="Philadelphia">Philly</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </DropdownButton>
            </ButtonToolbar>
        </Col>
      </Grid>
    )
}

ChooseVenue.propTypes = {
  onSelectCity: PropTypes.func.isRequired
}
export default ChooseVenue;
