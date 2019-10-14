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
                  @change="changeName($event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Type"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        
        <v-card>
          <h1>{{ sId }}</h1>
          <h2>{{ sName }}</h2>
          <h2>{{ sType }}</h2>
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
  // public countNum: number = counterModule.count; // これはvueが表示された後は動的に反映されないので下のgetで対応。
  public decre() {
      Counter.decrementAction();
      }
  public incre() {
      Counter.increment();
      }
  public changeName(newName:string ) {
      BoardStock.changeNameAction(newName);
      }
  public changeType(newType:string ) {
      BoardStock.changeTypeAction(newType);
      }

  get single() {
    return Counter.count;
  }
  get double() {
    return Counter.count * 2;
  }

  get sId() {
    return BoardStock.stock.id;
  }
  get sName() {
    return BoardStock.stock.name;
  }
  get sType() {
    return BoardStock.stock.type__c;
  }
}
</script>

<style>

</style>