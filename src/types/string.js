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
}

export default string;