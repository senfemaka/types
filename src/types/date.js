import React from 'react';
import { observable } from 'mobx';

class date {
    @observable _value = new Date();

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (newValue instanceof Date) {
            return this._value = newValue;
        }
        return this._value;
    }

    view() {
        return <span>{this._value ? this._value.toString() : 'date is not provided'}</span> // or datePicker
    }
}

export default date;