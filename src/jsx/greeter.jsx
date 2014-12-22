/** @jsx React.DOM */

import * as React from 'react';
import Actions from '../app/actions.js';


export default React.createClass ({

    getInitialState () {
        return {
            name: ''
        };
    },

    onNameChange (event) {
        this.name (event.target.value);
    },

    handleSubmit (e) {
        e.preventDefault ();

        var name = this.refs.name.getDOMNode ().value.trim ();
        if (name) {
            Actions.greet (name);
            this.name ('');
        }
    },

    name (name) {
        this.setState ({name});
    },

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="name" placeholder="John Doe" value={this.state.name} onChange={this.onNameChange} />
                <input type="submit" value="Greet" />
            </form>
        )
    }
});
