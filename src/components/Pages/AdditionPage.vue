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
        <BoardDetail/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import BoardDetail from '../Parts/BoardDetail.vue';

@Component({
  components: {
    BoardDetail,
  },
})
export default class AddtionPage extends Vue {
  
}
</script>

<style>

</style>