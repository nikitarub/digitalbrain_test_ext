import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';

import { Input } from '../../atoms/Input/Input';

import Bus from 'bus-graph';

export class Search extends React.Component {

    onSearchChange = (e) => {
        Bus.emit(
            {
                event: "searchInputChanged", 
                data: e.target.value
            }    
        )
    }

    render() {
        return (
            <Input
            onChange={this.onSearchChange}
            placeholder="Search for a command..."
            />
        )
    }
}


Search.propTypes = {
};


Search.defaultProps = {
};

