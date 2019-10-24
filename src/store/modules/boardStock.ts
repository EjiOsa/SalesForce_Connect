import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {IBoardStockStateList } from '../types';
import store from '@/store/store';
import LCC from 'lightning-container';

@Module({store, dynamic: true, namespaced: true, name: 'boardStockList' })

class BoardStock extends VuexModule implements IBoardStockStateList {
    // public stock = {id: 1, name: 'test', type__c: 'short'};
    public STOCK_LIST = [
        {id: 1, name: 'naish', type__c: 'short'},
        {id: 2, name: 'bill', type__c: 'long'},
        {id: 3, name: 'starboard', type__c: 'fun'},
    ];

    @Mutation
    public salesforceResponse(result: any, event: any ): void {
        this.STOCK_LIST[0].name = 'なっしゅ';
        // return this.stockList;
    }
    @Action({})
    public salesforce_Stock(): void {
        LCC.callApex(
            'BoardController.getStocks',
            undefined, // 引数のなしの場合はNullではなくundefinedで通る。
            this.salesforceResponse,
            {escape: true},
        );
    }

    @Mutation
    public changeType(type: string ): void {
        this.STOCK_LIST[0].type__c = type;
    }
    @Action({})
    public changeTypeAction(type: string ) {
        setTimeout(() => {
        this.changeType(type);
        }, 5000);
    }

    @Mutation
    public changeName(name: string ) {
        this.STOCK_LIST[0].name = name;
    }
    @Action({})
    public changeNameAction(name: string ) {
        setTimeout(() => {
        this.changeName(name);
        }, 1000);
    }
}

export default getModule(BoardStock);
