<template>
<div>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Id</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Password</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.name">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.password}}</td>
                    <td>
                        <v-btn @click="deleteUser(item.id)">Delete</v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name: 'getData',
    data() {
        return {
            list: null
        }
    },
    methods: {
        getUser() {
            this.axios.get('http://localhost:3000/user').then((result) => {
                this.list = result.data
            })
        },
        deleteUser(id) {
            this.axios.delete('http://localhost:3000/user/'+id).then((result) => {
                console.log(result)
                this.getUser()
            })
        },
    },
    mounted() {
        this.getUser()
    }
}
</script>

<style lang="scss" scoped>

</style>
