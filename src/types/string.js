import React from 'react';
import { observable } from 'mobx';

class string {
    @observable _value = '';

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
    }

    view() {
        return <span>{this._value}</span>
    }

    email(props) {
        return (
            <input type="email" {...props} />
        );
    }

    password(props) {
        return (
            <input type="password" {...props} />
        );
    }
}

export default string;