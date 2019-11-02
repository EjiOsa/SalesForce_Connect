import Vue from 'vue';
import Vuex from 'vuex';
import {IBoardStockStateList } from './types';
// import {ICounterState, IBoardStockStateList } from './types';　// ここは不要だけど、今後のために複数用は残しておく。


Vue.use(Vuex);

export interface IRootState { // 複数のStateを使用するときはここでまとめる。
  // counterName: ICounterState;
  boardStockList: IBoardStockStateList;
}

export default new Vuex.Store<IRootState>({});
// export default new Vuex.Store<ICounterState>({}); // 単数のときはここに直接でもよかった。
