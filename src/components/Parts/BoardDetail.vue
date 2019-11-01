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
                <component :is="btnName"/>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue, Prop } from 'vue-property-decorator';
import BoardStock from '@/store/modules/boardStock';
import DeleteButton from './DeleteButton.vue';
import UpdateButton from './UpdateButton.vue';

@Component({
    components: {
    UPDATE: UpdateButton,
    DELETE: DeleteButton
    },
})
export default class BoardDetail extends Vue {
    @Prop({ type: String })
    private btnName?: 'string';

    get boards() {
        return BoardStock.BOARD_LIST;
    }
}
</script>
