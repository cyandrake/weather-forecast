<template>
    <div id="exampleWrapper" class="flex justify-center" style="margin-top: 50px;">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <!-- <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a> -->
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
            <button @click="login" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Login
            </button>
        </div>
    </div>
</template>

<script>
import {useStore} from "vuex";
export default {
    data: function () {
        return {
            user: this.$auth0.user,
            isAuthenticated: this.$auth0.isAuthenticated
        };
    },
    methods: {
        login() {
            const store = useStore();

            try {
                this.$auth0.loginWithRedirect();
                store.dispatch('setAuth', true);
            } catch (error) {
                store.dispatch('setAuth', false);
            }
            
        },
        logout() {
            this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
        }
    }
  };
</script>