// ./src/components/Div.js
import React from 'react';
import { TextContext } from './../context';

export default class Div extends React.Component {
    render() {
        return (
            <div>{ this.context }</div>
        )
    }
}

Div.contextType = TextContext;