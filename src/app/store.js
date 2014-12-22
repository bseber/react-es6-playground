
import {createStore} from 'reflux';
import actions from './actions.js';


export default createStore ({

    listenables: actions,

    onGreet (name) {
        alert (`store says: Hello, ${name}!`)
    }

});