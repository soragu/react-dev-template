import React from 'react';

function Photo(props) {
	return <img src={props.imageUrl} />;
}

Photo.propTypes = {
	imageUrl: React.PropTypes.string
};

export default Photo;