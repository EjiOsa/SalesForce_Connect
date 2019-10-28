export interface ICounterState {
    COUNT: number;
}

export interface IBoardStockStateList {
    BOARD_LIST: Array<{ Id: string; Name: string; type__c: string; }>; // 普通の配列
}
