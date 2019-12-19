import React from 'react';
import { observer } from 'mobx-react';
import TestModel from "../../models/TestModel";

const store = new TestModel();

@observer
class Test extends React.Component {

    handleOnchange = e => {
        const currentValue = e.target.value;
        store.changeNum(currentValue);
        store.changeMon(currentValue);
        store.changeStr(currentValue);
    }

    handleOnClick = () => {
        console.table(store);
    }

    render() {
        const { bool, dat, mon, num, str } = store;
        return (
            <React.Fragment>
                <label>BackEnd --- </label><input onChange={this.handleOnchange} />
                <br/>
                <label>FrontEnd --- </label><label>{num.view()}</label>
                <br/>
                <button onClick={this.handleOnClick}>ClickMe</button>
                <br/>
                <br/>
                <br/>
                <span>numValue --- {num.value || 'Something wrong!!!'}</span><br/>
                <span>strValue --- {str.value || 'Something wrong!!!'}</span><br/><span>---------------------------------</span><br/><br/>
                <span>$Money$    --- {mon.cash()}</span><br/><span>$Deposit$ --- {mon.deposit()}</span><br/><span>$Credit$ --- {mon.credit()}</span><br/><span>---------------------------------</span><br/><br/>
                <span>NumView  --- {num ? num.view() : ''}</span><br/>
                <span>strView  --- {str.view()}</span><br/><span>---------------------------------</span><br/><br/>
                <label>{`e-mail --- `}</label>{str.email({style: {backgroundColor: 'blue', color: 'white'}})}
                <label>{`   password --- `}</label>{str.password()}
                <br/><span>---------------------------------</span>
                <br/>
                <br/>
                <span>Boolean value --- {bool.view('Yep, sir', 'No, sir')}</span><br/>
                {bool.checkbox({onChange: () => bool.toggle()})}
                {bool.radiobutton({onChange: () => bool.toggle()})}
                <br/><span>---------------------------------</span>
                <br/>
                <br/>
                <span>Date --- </span>{dat.view()}
            </React.Fragment>
        );
    }
}

export default Test;