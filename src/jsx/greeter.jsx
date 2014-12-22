/** @jsx React.DOM */

import * as React from 'react';
import Actions from '../app/actions.js';


export default React.createClass ({

    handleSubmit (e) {
        e.preventDefault ();

        var name = this.refs.name.getDOMNode ().value.trim ();
        Actions.greet.trigger (name);
    },

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="name" placeholder="John Doe" />
                <input type="submit" value="Greet" />
            </form>
        )
    }
});
