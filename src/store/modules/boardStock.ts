import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {IBoardStockState } from '../types';
import store from '@/store/store';

@Module({store, dynamic: true, namespaced: true, name: 'boardStock' })

class BoardStock extends VuexModule implements IBoardStockState {
    public stock = {id: 1, name: 'test', type__c: 'short'};

    @Mutation
    public changeType(type:string ): void {
        this.stock.type__c = type;
    }
    @Action({})
    public changeTypeAction(type:string ) {
        setTimeout(() => {
        this.changeType(type);
        }, 5000);
    }

    @Mutation
    public changeName(name:string ) {
        this.stock.name = name;
    }
    @Action({})
    public changeNameAction(name:string ) {
        setTimeout(() => {
        this.changeName(name);
        }, 1000);
    }
}

export default getModule(BoardStock);
