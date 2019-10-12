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
        <v-card><h1>{{ countNum }}</h1></v-card>
        <v-card><h1>{{ double }}</h1></v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue, Watch } from 'vue-property-decorator';
import {counterModule } from '@/store/modules/counter';

@Component
export default class ReferencePage extends Vue {
  public countNum: number = counterModule.count;
  public decre() {
      counterModule.decrementAction();
      }
  public incre() {
      counterModule.increment();
      }

  get double() {
    return this.countNum * 2;
  }
}
</script>

<style>

</style>