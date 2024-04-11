<script setup>
import Title from '@/components/Title.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="r-container">
    <Title title="Settings" :primary-action="false" :secondary-action="false" />
    <div class="r-grid">
      <div class="r-grid-item r-grid-item-full">
        <RSelect placeholder="Search in settings" />
      </div>
    </div>
    <div class="divider"></div>
    <div class="r-grid">
      <div class="r-grid-item r-grid-item-secondary">
        <div class="tile is-description">
          <div class="tile-content">
            <h2 class="r-stack-5">Payment forms</h2>
            <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="r-grid-item r-grid-item-primary">
        <div class="tile is-hoverable r-stack-4" @click="router.push({name: 'forms'})">
          <div class="tile-content">
            <div class="r-d-flex">
              <RAvatar icon="checkout" class="r-flex-none" />
              <div class="r-ml-4">
                <h3>Checkout form</h3>
                <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-hoverable" @click="router.push({name: 'forms'})">
          <div class="tile-content">
            <div class="r-d-flex">
              <RAvatar icon="payments" class="r-flex-none" />
              <div class="r-ml-4">
                <h3>Deposit</h3>
                <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="r-grid">
      <div class="r-grid-item r-grid-item-secondary">
        <div class="tile is-description">
          <div class="tile-content">
            <h2 class="r-stack-5">Configuration</h2>
            <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="r-grid-item r-grid-item-primary">
        <div class="tile is-hoverable r-stack-4" @click="router.push({name: 'forms'})">
          <div class="tile-content">
            <div class="r-d-flex">
              <RAvatar icon="billing-portal" class="r-flex-none" />
              <div class="r-ml-4">
                <h3>Checkout form</h3>
                <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-hoverable" @click="router.push({name: 'forms'})">
          <div class="tile-content">
            <div class="r-d-flex">
              <RAvatar icon="transactions" class="r-flex-none" />
              <div class="r-ml-4">
                <h3>Checkout form</h3>
                <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
