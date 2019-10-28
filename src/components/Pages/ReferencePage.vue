<template>
  <v-container>
    <v-layout
    text-center
    wrap
    >
      <v-flex mb-4>
        <h2>
          ホーム及びデータの参照をするページ。
        </h2>
        <v-btn @click="incre">+</v-btn>
        <v-btn @click="decre">-</v-btn>
        <v-card><h1>{{ single }}</h1></v-card>
        <v-card><h1>{{ double }}</h1></v-card>
        
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Name"
                  outlined
                  dense
                  @change="changeString('Name', $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Type"
                  outlined
                  dense
                  @change="changeString('Type', $event)"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-btn @click="changeSalesforce">?</v-btn>
        <v-card>
          <h2>ID : {{ sId }}</h2>
          <h2>Name : {{ sName }}</h2>
          <h2>Type : {{ sType }}</h2>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue, Watch } from 'vue-property-decorator';
import Counter from '@/store/modules/counter';
import BoardStock from '@/store/modules/boardStock';

@Component
export default class ReferencePage extends Vue {
  // public countNum: number = Counter.count; // これはvueが表示された後はリアクティブに反映されないので下のgetで対応。
  public decre() {
      Counter.decrementAction();
      }
  public incre() {
      Counter.increment();
      }
  public changeString(str: string, event: string ) {
      if (str === 'Name') {
        BoardStock.changeNameAction(event);
      } else if (str === 'Type') {
        BoardStock.changeTypeAction(event);
      }
  }
  public changeSalesforce() {
    BoardStock.salesforce_Stock();
  }

  get single() {
    return Counter.COUNT;
  }
  get double() {
    return Counter.COUNT * 2;
  }

  get sId() {
    return BoardStock.BOARD_LIST[0].Id;
  }
  get sName() {
    return BoardStock.BOARD_LIST[1].Name;
  }
  get sType() {
    return BoardStock.BOARD_LIST[2].type__c;
  }
}
</script>

<style>

</style>