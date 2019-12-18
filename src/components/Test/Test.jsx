import React from 'react';
import { observer } from 'mobx-react';
import TestModel from "../../models/TestModel";

const store = new TestModel();

@observer
class Test extends React.Component {

    handleOnchange = e => {
        const currentValue = e.target.value;
        store.changeNum(currentValue);
        store.changeStr(currentValue);
    }

    handleOnClick = () => {
        console.table(store);
    }

    render() {
        const { bool, num, str } = store;
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
                <span>strValue --- {str.value || 'Something wrong!!!'}</span><br/>
                <span>Money    --- {num.money()}</span><br/>
                <span>NumView  --- {num ? num.view() : ''}</span><br/>
                <span>strView  --- {str.view()}</span><br/>
                <br/>
                <br/>
                <br/>
                <span>Boolean value --- {bool.view()}</span><br/>
                {bool.checkbox({onChange: () => bool.toggle()})}
                {bool.radiobutton({onChange: () => bool.toggle()})}
            </React.Fragment>
        );
    }
}

export default Test;