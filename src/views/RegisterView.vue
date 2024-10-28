<template>
    <div class="w-full max-w-sm mx-auto">
        <div
            class="mt-16 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
            <div class="p-4 sm:p-5">
                <div class="text-center">
                    <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                        Already have an account?
                        <router-link class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                            to="/login">
                            Sign in here
                        </router-link>
                    </p>
                </div>

                <div class="mt-5">
                    <ErrorWindow v-if="errorMessage" :errorMessage="errorMessage" />
                    <!-- Form -->
                    <form @submit.prevent="submitHendeler">
                        <div class="grid gap-y-4 pt-4">
                            <Input type="text" label="Name" v-model="username" />
                            <Input type="email" label="Email address" v-model="email" />
                            <Input type="password" label="Password" v-model="password1" />
                            <Input type="password" label="Confirm Password" v-model="password2" />
                            <Button type="submit">
                                <template v-if="!isLoading">
                                    Sign Up
                                </template>
                                <template v-if="isLoading">
                                    <div class="animate-spin inline-block size-5 border-[2px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white"
                                        role="status" aria-label="loading">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </template>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ErrorWindow from '@/components/elements/ErrorWindow.vue'
    export default {
        name: 'registr',
        components: {ErrorWindow},
        data() {
            return {
                username: '',
                email: '',
                password1: '',
                password2: '',
                errorMessage: null
            }
        },
        computed: {
            isLoading() {
                return this.$store.state.auth.isLoading;
            }
        },
        methods: {
            submitHendeler() {
                const data = {
                    username: this.username,
                    email: this.email,
                    password1: this.password1,
                    password2: this.password2
                }
                this.$store.dispatch('register', data)
                    .then(userData => {
                        console.log("USERDATA", userData)
                        this.$router.push({ name: 'login' })
                    })
                    .catch(errors => {
                        console.log("ERORR", errors);
                        this.errorMessage = errors
                    })
            }
        }
    }
</script>