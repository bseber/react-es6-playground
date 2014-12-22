
import {createStore} from 'reflux';
import actions from './actions.js';

const greetings = [];

export default createStore ({

    listenables: actions,

    onGreet (name) {
        greetings.push (name);
        this.trigger (greetings);
    }

});