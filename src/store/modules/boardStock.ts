import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {IBoardStockStateList } from '../types';
import store from '@/store/store';
import LCC from 'lightning-container';

@Module({store, dynamic: true, namespaced: true, name: 'boardStockList' })

class BoardStock extends VuexModule implements IBoardStockStateList {
    // public stock = {id: 1, name: 'test', type__c: 'short'};
    public STOCK_LIST = [
        {Id: '1', Name: 'naish', type__c: 'short'},
        {Id: '2', Name: 'bill', type__c: 'long'},
        {Id: '3', Name: 'starboard', type__c: 'fun'},
    ];

    @Mutation
    public salesforceResponse(result: any, event: any ): void {
        this.STOCK_LIST = result;
    }
    @Action({})
    public salesforce_Stock(): void {
        LCC.callApex(
            'BoardController.getStocks',
            10,
            this.salesforceResponse,
            {
                buffer: true, // default true
                escape: true, // default true
                timeout: 30000, // default 30000 max 120000
            },
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
        this.STOCK_LIST[0].Name = name;
    }
    @Action({})
    public changeNameAction(name: string ) {
        setTimeout(() => {
        this.changeName(name);
        }, 1000);
    }
}

export default getModule(BoardStock);
