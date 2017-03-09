import React from 'react';

function Print(props) {
	return <p>Result is {props.output}</p>;
}

Print.propTypes = {
	output: React.PropTypes.string
};

export default Print;