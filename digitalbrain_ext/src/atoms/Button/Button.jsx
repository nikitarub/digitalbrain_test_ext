import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';


export class Button extends React.Component {
    render() {
        return (
            <button
            className={this.props.className}
            onClick={this.props.onClick}
            >
            {this.props.label}
            </button>
        )
    }
}


Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};


Button.defaultProps = {
    onClick: undefined,
};

