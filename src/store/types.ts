export interface ICounterState {
    count: number;
}

// export interface IBoardStockState {
//     stock: {
//         id: number;
//         name: string;
//         type__c: string;
//     };
// }

export interface IBoardStockStateList { // extends IBoardStockState { //継承しても使えないなら、継承する必要ないよね。 
    stock_list: Array<{ id: number; name: string; type__c: string; }>; // 普通の配列にする場合。
    // stock_list: [stock, ...Array<stock>]; // 最低個数を指定する配列。継承して、こんな感じにしたかったけど。違うらしい。そして、一つ以上の配列って普通の配列だよね。
    // stock_list: [ // 最低個数を
    //         { id: number; name: string; type__c: string; },
    //         ...Array<{ id: number; name: string; type__c: string; }>
    //     ];
}
