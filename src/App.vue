<template>
<v-app>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Hotel<strong>Management</strong></v-app-bar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{on}">
                <v-btn v-on="on" color="success">Nav Menu</v-btn>
            </template>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                        <v-list-item-title>{{link.text}}</v-list-item-title>                 
                </v-list-item>
            </v-list>
        </v-menu>
        <div>
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
        </div>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                    <v-avatar size="100">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                </v-list-item-title>
                <v-list-item-subtitle class="mt-2">
                    <strong>random@User.com</strong>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="item in items" :key="item.title">
                <v-list-item-icon>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
        <router-view />
    </v-main>
</v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            drawer: false,
            items: [{
                    title: 'Dashboard',
                    icon: 'mdi-view-dashboard'
                },
                {
                    title: 'Photos',
                    icon: 'mdi-image'
                },
                {
                    title: 'About',
                    icon: 'mdi-help-box'
                },
            ],
            links: [{
                    text: 'Home',
                    route: '/'
                },
                {
                    text: 'About',
                    route: '/about'
                },
            ]
        }
    },
};
</script>

<style scoped>
.link {
    text-decoration: none;
    margin-right: 8px;
}
</style>
