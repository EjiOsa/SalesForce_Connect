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
        <v-card><h1>{{$store.state.count}}</h1></v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ReferencePage extends Vue {

}
</script>

<style>

</style>