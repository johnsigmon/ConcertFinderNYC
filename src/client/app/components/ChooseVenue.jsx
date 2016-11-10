import React, { PropTypes } from 'react';
import { Grid, Col, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
function ChooseVenue (props) {

  let buttonStyle = {
    "backgroundColor" : "#C9AF98",
    "color": "#3A4660",
    "borderRadius" : "10px",
    "height": "200px",
    "width": "100%",
    "fontWeight" : "bolder",
    "fontSize" : "40px"
  }
  return (
      <Grid>

          <Col xs={4} xsOffset={4}>
            <ButtonToolbar className="text-center">
              <DropdownButton bsStyle="default" title="Choose A City" noCaret id="dropdown-no-caret" style={buttonStyle} onSelect={props.onSelectCity}>
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
