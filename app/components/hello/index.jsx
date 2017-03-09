import React from 'react';
import styles from './index.scss';

function Hello(props) {
	return <h1 className={styles.textBlue}>Hello, {props.name}!</h1>;
}

Hello.propTypes = {
	name: React.PropTypes.string.isRequired
};

export default Hello;