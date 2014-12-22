/** @jsx React.DOM */

import * as React from 'react';
import {connect} from 'reflux';
import store from '../app/store.js';

export default React.createClass ({

    mixins: [
        // this will cause setState({greetings:updatedlist}) whenever the store does trigger(updatedlist)
        connect (store, 'greetings')
    ],

    getInitialState () {
        return {
            greetings: []
        };
    },

    render () {
        return (
            <ul>
                {this.state.greetings.map (name => (<li>{name}, said Hello</li>))}
            </ul>
        );
    }

});
