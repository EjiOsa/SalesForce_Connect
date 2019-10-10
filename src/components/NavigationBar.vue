<template>
    <nav>
        <v-app-bar app>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">SALES</span>
                <span>FORCE</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
                <v-btn to="/" color="grey">
                    <span>REFERENCE</span>
                </v-btn>
                <v-btn to="/Add" color="grey">
                    <span>ADDITION</span>
                </v-btn>
                <v-btn to="/Del" color="grey">
                    <span>DELETE</span>
                </v-btn>
                <v-btn to="/Upda" color="grey">
                    <span>UPDATE</span>
                </v-btn>
        </v-app-bar>
    </nav>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class NavigationBar extends Vue {

}
</script>

<style>

</style>