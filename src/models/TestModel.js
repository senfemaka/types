import { observable, computed, action } from "mobx";
import { boolean, date, money, number, string } from '../types';
import { observer } from "mobx-react";

export default class TestModel {

  bool = new boolean();
  dat = new date();
  num = new number();
  mon = new money();
  str = new string();

  // middlewares
  @action
  changeNum(newValue) {
    this.num.value = newValue;
  }

  @action
  changeMon(newValue) {
    this.mon.value = newValue;
  }

  @action
  changeStr(newValue) {
    this.str.value = newValue;
  }

}
