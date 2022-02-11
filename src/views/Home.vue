<template>
<div>
    <h1>Home</h1>
    <signup />
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="nextPage" color="success">next page</v-btn>
        </template>
        <span>Go to next page</span>
    </v-tooltip>
</div>
</template>

<script>
import Signup from '../components/Signup.vue';

export default {
    name: 'Home',
    components: {
        Signup,
    },
    methods: {
        nextPage() {
            this.$router.push({
                name: 'About'
            })
        }
    }

}
</script>
