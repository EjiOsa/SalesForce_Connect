import Vue from 'vue';
import Vuex from 'vuex';
import {ICounterState } from './modules/counter';

Vue.use(Vuex);

// export interface IRootState { //複数のStateを使用するときはここでまとめる。
  // counterName: ICounterState;
// }
// export default new Vuex.Store<IRootState>({});

export default new Vuex.Store<ICounterState>({});
