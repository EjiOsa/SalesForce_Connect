export interface ICounterState {
    count: number;
}

export interface IBoardStockStateList {
    stockList: Array<{ id: number; name: string; type__c: string; }>; // 普通の配列
}
