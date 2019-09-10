<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">SALES</span>
                <span>FORCE</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
                <v-btn flat to="/" color="grey">
                    <span>REFERENCE</span>
                </v-btn>
                <v-btn flat to="/Add" color="grey">
                    <span>ADDITION</span>
                </v-btn>
                <v-btn flat to="/Del" color="grey">
                    <span>DELETE</span>
                </v-btn>
                <v-btn flat to="/Upda" color="grey">
                    <span>UPDATE</span>
                </v-btn>
        </v-toolbar>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>