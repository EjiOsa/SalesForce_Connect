import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {IBoardStockStateList } from '../types';
import store from '@/store/store';
import LCC from 'lightning-container';

@Module({store, dynamic: true, namespaced: true, name: 'boardStockList' })

class BoardStock extends VuexModule implements IBoardStockStateList {
    // public stock = {id: 1, name: 'test', type__c: 'short'};
    public stockList = [
        {id: 1, name: 'naish', type__c: 'short'},
        {id: 2, name: 'bill', type__c: 'long'},
        {id: 3, name: 'starboard', type__c: 'fun'},
    ];

    @Mutation
    public salesforceResponse(result: any, event: any ): void { // 下のcallApexにカーソルを合わせると必要な引数が表示されて、それを元に引数を設定。　
        this.stockList[0].name = 'なっしゅ';　// とりあえず、メソッドが走ってるか確認。コンソールログは使えなかった。
        // return this.stockList;
    }
    @Action({})
    public salesforce_Stock(): void { // callApex自体は戻り値がないのでvoid
        LCC.callApex( // salesforceとやり取りをするためのメソッド。　getをつけていたけど、今回はボタンから起動するため削除。
            'BoardController.getStocks', // Apexのメソッド名を指定。文字列型。
            10, // メソッドに渡す値。引数がないからNullにしていたけどエラーになった。
            this.salesforceResponse, // 上の二つが正しく走るとここのメソッドが呼ばれる。
            {escape: true}, // これは意味不明。これから要調査。
        );
    }

    @Mutation
    public changeType(type: string ): void {
        this.stockList[0].type__c = type;
    }
    @Action({})
    public changeTypeAction(type: string ) {
        setTimeout(() => {
        this.changeType(type);
        }, 5000);
    }

    @Mutation
    public changeName(name: string ) {
        this.stockList[0].name = name;
    }
    @Action({})
    public changeNameAction(name: string ) {
        setTimeout(() => {
        this.changeName(name);
        }, 1000);
    }
}

export default getModule(BoardStock);
