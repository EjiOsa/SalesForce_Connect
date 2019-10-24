export interface ICounterState {
    COUNT: number;
}

export interface IBoardStockStateList {
    STOCK_LIST: Array<{ id: number; name: string; type__c: string; }>; // 普通の配列
}
