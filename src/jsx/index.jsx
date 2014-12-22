
import * as React from 'react';
import Greeter from './greeter.jsx';


export default {

    run () {
        React.render (
            <Greeter />,
            document.getElementById ('content')
        );
    }
};