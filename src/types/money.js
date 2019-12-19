import React from 'react';
import number from './number';
import { computed } from 'mobx';

class money extends number {
    cash() {
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

    deposit() {
        if (this._value > 0 ) {
            return this.cash();
        }
        return <span>You have no money on your deposit</span>
    }

    credit() {
        if (this._value < 0 ) {
            return this.cash();
        }
        return <span>You have no credit</span>
    }

    balance(expense) {
        if (expense instanceof money) {
            return <span>{this._value + expense.value}</span>;
        }
        return <span>{this._value}</span>;
    }
}

export default money;