<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';

import AuthLayout from './layouts/AuthLayout.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';

const route = useRoute();
const layout = computed(() => {
    return route.meta.layout === 'AuthLayout' ? AuthLayout : 
    route.meta.layout === 'DashboardLayout' ? DashboardLayout : DefaultLayout;
});

</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
