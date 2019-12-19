import React from 'react';
import { observable } from 'mobx';

class number {
    @observable _value = 1;

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue === 'number') {
            this._value = newValue;
        } else if (typeof newValue === 'string') {
            this._value = Number(newValue);
        }
    }

    view() {
        if (!this._value) {
            return (
                <span>Something wrong!!!</span>
            );
        }
        return <span>{this._value}</span>
    }
}

export default number;