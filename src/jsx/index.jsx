
import * as React from 'react';
import Greeter from './greeter.jsx';


export default {

    display () {
        React.render (
            <Greeter />,
            document.getElementById ('content')
        );
    }
};