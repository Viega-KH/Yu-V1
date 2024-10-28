<script setup>
    import { useRoute } from 'vue-router'
    import Header from '@/components/comman/Header.vue'
    import Footer from '@/components/comman/Footer.vue'

    </script>
    
    <template>
        <div>
            <Header v-if="!$route.meta.hideHeaderFooter" />
            <main>
                <RouterView />
            </main>
            <Footer v-if="!$route.meta.hideHeaderFooter" />
        </div>
    </template>
    