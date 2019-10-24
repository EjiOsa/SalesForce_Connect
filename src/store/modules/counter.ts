import {Module, VuexModule, getModule, Mutation, Action} from 'vuex-module-decorators';
import {ICounterState } from '../types';
import store from '@/store/store';

@Module({store, dynamic: true, namespaced: true, name: 'counterName' })

class Counter extends VuexModule implements ICounterState {
    public COUNT: number = 10;

    @Mutation
    public increment() {
        this.COUNT++;
    }
    @Mutation
    public decrement() {
        this.COUNT--;
    }

    @Action({})
    public incrementAction() {
        setTimeout(() => {
        this.increment();
        }, 500);
    }
    @Action({})
    public decrementAction() {
        setTimeout(() => {
        this.decrement();
        }, 5000);
    }
}

export default getModule(Counter);
