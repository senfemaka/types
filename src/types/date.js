import React from 'react';
import { observable } from 'mobx';

class date {
    @observable _value;

    get value() {
        return this._value;
    }

    set value(newValue = new Date()) {
        if (newValue instanceof Date) {
            return this._value = newValue;
        }
        return this._value;
    }

    view() {
        return <span>{this._value || 'date is not provided'}</span> // or datePicker
    }
}

export default date;