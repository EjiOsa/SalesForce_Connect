<template>
    <v-container>
        <v-layout>
            <v-flex
            v-for="board in boards" :key="board.Id"
            >
            <v-card
            min-width="380"
            class="ma-2 mp-2"
            outlined
            >
            <v-card-text>
            <div>Board</div>
            <h1 class="display-1 text--primary">
                Name : {{ board.Name }}
                </h1>
                <p>detail</p>
                <h2 class="text--primary">
                    ID : {{ board.Id }}<br>
                    Type : {{ board.type__c }}
                </h2>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                    text
                    color="deep-purple accent-4"
                    >
                    {{ btnName }}
                    </v-btn>
                </v-card-actions>
                <!-- <v-card-actions>
                    <v-btn
                    text
                    color="deep-purple accent-4"
                    >
                    DELETE
                    </v-btn>
                </v-card-actions>
                <v-card-actions>
                    <v-btn
                    text
                    color="deep-purple accent-4"
                    >
                    UPDATE
                    </v-btn>
                </v-card-actions> -->
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue, Prop } from 'vue-property-decorator';
import BoardStock from '@/store/modules/boardStock';

@Component
export default class BoardDetail extends Vue {
    @Prop({ type: String, required: true, })
    btnName!: String; // 『！』について。親からのデータを受け取るが、このコンポーネントのみで考えると親からの値は保証されていないので初期化エラーがでる。

    get boards() {
        return BoardStock.BOARD_LIST;
    }
}
</script>
