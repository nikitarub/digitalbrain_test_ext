import React from 'react';

import PropTypes from 'prop-types';
import "./commandlist.scss";

import { CommandItem } from '../../molecules/CommandItem/CommandItem';

import Bus from 'bus-graph';

export class CommandList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            original_commands: this.props.commands,
            commands: this.props.commands
        };
    }

    componentDidMount = () => {
        Bus.on("searchInputChanged", this.searchInputChangedCallback);
    }

    componentWillUnmount = () => {
        Bus.totalOff("searchInputChanged");
    }

    searchInputChangedCallback = (data) => {
        this.search(data);
    }

    search = (search_string) => {
        if (search_string !== ""){
            const new_search = this.state.commands.filter(
                (command) =>
                {
                    return command.name.toLowerCase().includes(search_string.toLowerCase());
                }
            );
            this.setState({
                ...this.state,
                commands: new_search,
            })
        } else {
            this.setState({
                ...this.state,
                commands: this.state.original_commands,
            })
        }
        
    }

    render () { 
        let command_list = <></>;
        if (this.state.commands.length == 0){
            command_list = <h2 className="digitalbrain-notfound">No command found</h2>
        } else {  
            command_list = this.state.commands.map((command_data) =>
                <CommandItem 
                    key={"key_command" + command_data.name} 
                    {...command_data}
                />
            )
        }

        return (
            <div className="digitalbrain-command-list">
                {command_list}
            </div>
        )
    }
}


CommandList.propTypes = {
    commands: PropTypes.array,
};


CommandList.defaultProps = {
};
