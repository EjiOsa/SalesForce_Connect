import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {IBoardStockStateList } from '../types';
import store from '@/store/store';
import LCC from 'lightning-container';

@Module({store, dynamic: true, namespaced: true, name: 'boardStockList' })

class BoardStock extends VuexModule implements IBoardStockStateList {
    public BOARD_LIST = [
        {Id: '1', Name: 'naish', type__c: 'short'},
        {Id: '2', Name: 'bill', type__c: 'long'},
        {Id: '3', Name: 'starboard', type__c: 'fun'},
    ];

    @Mutation
    public salesforceResponse(result: any, event: any ): void {
        this.BOARD_LIST = result;

        // if (!event) { // eventのキャッチができない。eventそのものがないらしい。後日、調整。
        //     this.changeNameAction('ナッシュ');
        // } else if (event.type === 'exception') {
        //     this.changeNameAction('なっしゅ');
        // } else {
        //     this.changeNameAction('NAISH');
        // }
    }

    public salesforce_Stock(): void {
        LCC.callApex(
            'BoardController.getStocks',
            3,
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
        this.BOARD_LIST[0].type__c = type;
    }
    @Action({})
    public changeTypeAction(type: string ) {
        setTimeout(() => {
        this.changeType(type);
        }, 5000);
    }

    @Mutation
    public changeName(name: string ) {
        this.BOARD_LIST[0].Name = name;
    }
    @Action({})
    public changeNameAction(name: string ) {
        setTimeout(() => {
        this.changeName(name);
        }, 1000);
    }
}

export default getModule(BoardStock);
