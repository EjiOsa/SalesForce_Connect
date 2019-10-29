<template>
  <v-app class="grey lighten-4">
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from './components/NavigationBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
  }),
});
</script>
