import React from 'react';
import PropTypes from 'prop-types';


export const Placeholder = (props) => {

    const radius = props.rounded ? "3px" : "0px";

    const style = {
        width: props.width, 
        height: props.height,
        margin: props.margin,
        backgroundColor: "#d3d3d3",
        borderRadius: radius
    };
    
    return (
        <div style={style}>
        </div>
    )
}

Placeholder.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
};


Placeholder.defaultProps = {
    rounded: true
};

