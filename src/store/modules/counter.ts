import {Module, VuexModule, getModule, Mutation, Action} from 'vuex-module-decorators';
import store from '@/store/store';

export interface ICounterState {
    count: number;
}

@Module({store, dynamic: true, namespaced: true, name: 'counterName' })

class Counter extends VuexModule {
    public count: number = 10;

    @Mutation
    public increment() {
        this.count++;
    }
    @Mutation
    public decrement() {
        this.count--;
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
