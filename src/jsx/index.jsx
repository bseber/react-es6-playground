
import * as React from 'react';
import Greeter from './greeter.jsx';
import GreetingsHistory from './greetingsHistory.jsx';


export default {

    display () {
        React.render (
            <div>
                <Greeter />
                <GreetingsHistory />
            </div>,
            document.getElementById ('content')
        );
    }
};