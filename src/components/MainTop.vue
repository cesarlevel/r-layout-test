
<script setup>
import { useNavigationCollapse } from '@/composables/use-navigation-collapse';

const { collapseNav } = useNavigationCollapse();
</script>

<template>
  <div class="main-top r-inset-9 r-pt-4 r-pb-4">
    <div class="r-grid-fitted r-justify-content-between r-align-items-center">
      <div class="r-d-flex">
        <RButton v-tooltip="{text: 'Collapse navigation'}" style="margin-left: calc(var(--r-space-3) * -1)!important" icon="collapse-layout" type="plain" @click="collapseNav" class="r-inline-2" />
        <RButton icon-left="company" icon-right="caret-down-s" type="plain" class="r-inline-3">My organization</RButton>
        <RInput left-icon="search" placeholder="search" />
      </div>
      <div class="r-d-flex r-align-items-center">
        <RButton icon="notifications" type="plain" class="r-inline-3" />
        <RAvatar initials="JD" class="r-cursor-pointer" />
      </div>
    </div>
  </div>
</template>
