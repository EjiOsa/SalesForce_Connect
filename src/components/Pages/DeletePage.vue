<template>
  <v-container>
    <v-layout
    text-center
    wrap
    >
      <v-flex mb-4>
        <h2>
          データの削除をするページ。
        </h2>
        <v-btn @click="decre">-</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class DeletePage extends Vue {
  @Prop()
    public decre() {
      alert('decrement');
      }
}
</script>

<style>

</style>