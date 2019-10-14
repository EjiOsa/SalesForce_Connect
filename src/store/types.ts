export interface ICounterState {
    count: number;
}

export interface IBoardStockState {
    stock: {
        id: number;
        name: string;
        type__c: string;
    };
}
