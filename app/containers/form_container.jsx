import React from 'react';
import { connect } from 'react-redux'
import { determineSqrt } from '../actions/my_form_actions.js'
import MyForm from 'Components/myForm';
import Print from 'Components/print';

class FormContainer extends React.Component {	

  handleSqrtButtonClick(text) {
    this.props.onFormSubmit(text);
  }

  render() {
    return (
      <div>
        <MyForm onSqrtButtonClick={(text) => this.handleSqrtButtonClick(text)} />
        <Print output={this.props.result} />
      </div>
	);
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
      result: state.result
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onFormSubmit: (text) => dispatch(determineSqrt(text))
  }
}

// Connected Component
const FormContainerApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);

export default FormContainerApp;