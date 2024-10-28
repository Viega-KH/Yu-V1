<template>
    <div :class="{'fade-in': visible, 'fade-out': !visible}" class="bg-red-50 rounded-md border-t-2 border-red-500 p-4 dark:bg-red-800/30" role="alert" tabindex="-1"
        aria-labelledby="hs-bordered-red-style-label">
        <div class="flex">
            <div class="shrink-0">
                <!-- Icon -->
                <span
                    class="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </span>
                <!-- End Icon -->
            </div>
            <div class="ms-3">
                <h3 id="hs-bordered-red-style-label" class="text-gray-800 font-semibold dark:text-white">
                    Error!
                </h3>
                <div class="mt-2 text-sm text-red-700 dark:text-red-400">
                    <ul class="list-disc space-y-1 ps-5">
                        <li v-for="(errors, field) in errorMessage" :key="field">
                            <!-- <strong>{{ field }}:</strong> -->
                            <ul>
                                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ErrorWindow',
        props: {
            errorMessage: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                visible: true
            }
        },
        watch: {
            errorMessage: {
                handler(newVal) {
                    if (newVal && newVal.length > 0) {
                        this.showAlert()
                    }
                },
                deep: true
            }
        },
        methods: {
            showAlert() {
                this.visible = true
                setTimeout(() => {
                    this.closeAlert()
                }, 4000);
            },
            closeAlert() {
                this.visible = false
            }
        }
    }
</script>

<style scoped>
    .fade-in {
        animation: fadeIn 0.2s ease-out;
    }

    .fade-out {
        animation: fadeOut 0.2s ease-in forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }

        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
</style>