import React from 'react';

class MyForm extends React.Component {

	handleClick() {
		const node = this.refs.input;
		const text = node.value.trim();
		this.props.onSqrtButtonClick(text);
		node.value = '';
  }
  
  render() {
		return (
			<div>
				<input type="text" ref='input' />
				<button onClick={(e) => this.handleClick(e)}>
					Square Root
				</button>
			</div>
		);
	}
}

MyForm.propTypes = {
	onSqrtButtonClick: React.PropTypes.func
};

export default MyForm;