import { observable, computed, action } from "mobx";
import { number, string } from '../types';
import { observer } from "mobx-react";

export default class TestModel {

  num = new number();
  str = new string();
  

  @action
  changeNum(newValue) {
    this.num.value = newValue;
  }

  @action
  changeStr(newValue) {
    this.str.value = newValue;
  }

}
