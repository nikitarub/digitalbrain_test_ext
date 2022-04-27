import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';


export class Input extends React.Component {

    render() {
        return (
            <input
            onChange={(e) => this.props.onChange(e)}
            placeholder={this.props.placeholder}>
            </input>
        )
    }
}


Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};


Input.defaultProps = {
    onChange: undefined,
};

