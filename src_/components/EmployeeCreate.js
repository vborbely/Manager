import React, { Component } from 'react';
import { Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmplolyeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;

    // shift is defaulted to 'Monday'
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    //console.log(this.props.employee);
    return (
      <Card>
        <EmployeeForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmplolyeeCreate);
