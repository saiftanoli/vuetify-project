<template>
<div>
    <v-container>
        <v-form ref="form" v-model="valid">
            <v-text-field  required v-model="name" :rules="nameRules" label="name" ></v-text-field>
            <v-text-field required v-model="email" :rules="emailRules"  label="email" ></v-text-field>
            <v-text-field required v-model="password" :rules="passwordRules"  label="password" type="password" ></v-text-field>
            <v-btn @click="signup" color="blue">Signup</v-btn>
            <v-btn @click="reset" class="ml-4" color="error">Reset</v-btn>
        </v-form>
    </v-container>

</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Signup',
    data() {
        return {
            name: '',
            nameRules: [
                v => !!v || 'name must required',
                v => (v && v.length >= 20) || 'name is between 1 t0 20 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'email must required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'password must required',
                v => (v && v.length < 8) || 'password must be greater than 8 digits'
            ],
        }
    },
    methods:{
        reset(){
             this.$refs.form.reset()
        },
        async signup(){
            let result = await axios.post('http://localhost:3000/user' , {
                name:this.name,
                email:this.email,
                password:this.password
            });
            if(result.status == 201){
                alert('signup is done');
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
