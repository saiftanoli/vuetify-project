<template>
<div>
    <v-container>
        <v-card width="200">
            <v-list>
                <v-list-item v-for="comp in addComputer" :key="comp.id">
                    <v-list-item-title>
                        {{comp.id}}
                        {{comp.name}}
                        {{comp.price}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
    export default {
        name:'computer',
         computed:{
            ...mapState(['computer']),
            ...mapGetters(['addComputer'])
        }
    }
</script>

<style lang="scss" scoped>

</style>
