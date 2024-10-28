<template>
    <button @click="toggleDarkMode" class="relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
        <i :class="['shrink-0 size-4', isDarkMode ? 'fas fa-sun text-gray-200' : 'fas fa-moon text-gray-500']"></i>
    </button>
</template>

<script setup>
import { ref } from 'vue'
const isDarkMode = ref(false)
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value

    if (isDarkMode.value) {
        document.body.classList.add('dark')
        localStorage.setItem('dark-mode', 'true')
    } else {
        document.body.classList.remove('dark')
        localStorage.setItem('dark-mode', 'false')
    }
}

if (localStorage.getItem('dark-mode') === 'true') {
    isDarkMode.value = true
    document.body.classList.add('dark')
}
</script>

