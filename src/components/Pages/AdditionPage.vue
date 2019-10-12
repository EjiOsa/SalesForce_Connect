<template>
  <v-container>
    <v-layout
    text-center
    wrap
    >
      <v-flex mb-4>
        <h2>
          データの追加をするページ。
        </h2>
        <v-btn @click="incre">+</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {counterModule } from '@/store/modules/counter';

@Component
export default class AddtionPage extends Vue {
    public incre() {
      counterModule.increment();
    }
}
</script>

<style>

</style>