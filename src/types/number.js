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

    money() {
        if (!this._value) {
            return (
                <span>Something wrong!!!</span>
            );
        }
        const rub = this._value && this._value.toString().split('.')[0];
        const Rub = rub ? `${rub} руб.` : '';
        const kop = this._value && this._value.toString().split('.')[1] && this._value.toString().split('.')[1].slice(0, 2);
        const Kop = kop ? `${kop} коп.` : '';
        return <span>{`${Rub}  ${Kop}`}</span>
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