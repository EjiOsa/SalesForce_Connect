import Vue from 'vue';
import Vuex from 'vuex';
import {ICounterState, IBoardStockStateList } from './types';

Vue.use(Vuex);

export interface IRootState { // 複数のStateを使用するときはここでまとめる。
  counterName: ICounterState;
  boardStockList: IBoardStockStateList;
}

export default new Vuex.Store<IRootState>({});
// export default new Vuex.Store<ICounterState>({}); // 単数のときはここに直接でもよかった。
