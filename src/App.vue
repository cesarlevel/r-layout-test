<script setup>
import { reactive } from 'vue';
import Navigation from '@/components/Navigation.vue';
import MainTop from '@/components/MainTop.vue';

const state = reactive({
  topNotification: true,
});
</script>

<template>
  <section class="top-notification" v-if="state.topNotification">
    <div class="r-d-flex r-align-items-center r-justify-content-center">
      <RIcon icon="map-marker" class="r-mr-2"/>
      <span>
        You are in the sandbox environment. <a @click="state.topNotification = !state.topNotification" class="r-cursor-pointer r-text-primary">Switch to live</a>
      </span>
    </div>
  </section>
  <Navigation />
  <main class="r-position-relative">
    <MainTop />
    <section class="r-position-relative r-pb-12 r-pt-6">
      <RouterView />
    </section>
  </main>
</template>

<style scoped>
</style>
