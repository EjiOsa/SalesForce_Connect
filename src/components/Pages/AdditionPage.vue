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
        <BoardDetail/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Counter from '@/store/modules/counter';
import BoardDetail from '../Parts/BoardDetail.vue';

@Component({
  components: {
    BoardDetail,
  },
})
export default class AddtionPage extends Vue {
    public incre() {
      Counter.increment();
    }
}
</script>

<style>

</style>