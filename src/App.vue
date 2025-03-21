<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';

import AuthLayout from './layouts/AuthLayout.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';

const route = useRoute();
const layout = computed(() => {
    return route.meta.layout === 'AuthLayout' ? AuthLayout : DashboardLayout;
});

</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
