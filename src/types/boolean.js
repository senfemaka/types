import React from 'react';
import { observable } from 'mobx';

class boolean {
    @observable _value = false;

    get value() {
        return this._value;
    }

    true() {
        return this._value = true;
    }

    false() {
        return this._value = false;
    }

    toggle() {
        return this._value = !this._value;
    }

    checkbox(props) {
        return <input type="checkbox" checked={this._value} {...props} />
    }

    radiobutton(props) {
        return <input type="radio" checked={this._value} {...props} />
    }

    view(trueString, falseString) {
        return <span>{this._value ? trueString : falseString}</span>
    }
}

export default boolean;