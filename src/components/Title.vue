
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  actions: {
    type: Boolean,
    default: true,
  },
  showBadges: {
    type: Boolean,
    default: false,
  },
  primaryAction: {
    type: [String, Boolean],
    default: 'Save',
  },
  secondaryAction: {
    type: [String, Boolean],
    default: 'Cancel',
  },
  secondaryActionIcon: {
    type: [String, Boolean],
    default: false,
  },
  goBack: {
    type: Boolean,
    default: true,
  }
})
</script>

<template>
    <div class="r-grid-fitted r-justify-content-between r-mb-9">
      <div class="r-d-flex r-align-items-center">
        <RButton v-if="props.goBack" @click="router.back" icon="arrow-left" type="plain" size="small" class="r-inline-3" style="margin-left: calc(var(--r-space-3) * -1)!important" />
        <h1 class="r-m-0">{{ props.title }}</h1>
        <div class="r-ml-6" v-if="props.showBadges">
          <RBadge class="r-inline-3">Abandoned</RBadge>
          <RBadge class="r-inline-3" type="info">Credit</RBadge>
          <RBadge type="warning">Sticky gateway</RBadge>
        </div>
      </div>
      <div class="r-d-flex r-align-items-center" v-if="props.actions">
        <RButton v-if="props.secondaryActionIcon" class="r-inline-3" icon="actions" />
        <RButton v-if="props.secondaryAction" class="r-inline-3">{{ props.secondaryAction }}</RButton>
        <RButton v-if="props.primaryAction" type="primary">{{ props.primaryAction }}</RButton>
      </div>
    </div>
</template>

<style scoped>
  .r-grid-fitted {
    min-height: 36px;
  }
</style>