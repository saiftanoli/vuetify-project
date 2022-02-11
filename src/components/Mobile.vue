<template>
<div>
    <v-container>
        <v-card width="200">
            <v-list>
                <v-list-item v-for="mob in getMobile" :key="mob.id">
                    <v-list-item-title>
                        {{mob.id}}
                        {{mob.company}}
                        {{mob.price}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
        <v-btn depressed color="primary" @click="addMobile">add data</v-btn>
    </v-container>
    
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapMutations,
    mapState
} from 'vuex'
export default {
    name: 'mobile',
    computed: {
        ...mapState(['mobile']),
        ...mapGetters(['getMobile'])
    },
    methods: {
        ...mapMutations(['addMobile']),
        ...mapActions(['addMobile']),
    }
}
</script>
