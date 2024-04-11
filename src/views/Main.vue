<script setup>
import { useNavigationCollapse } from '@/composables/use-navigation-collapse';
import { ref } from 'vue';
import Title from '@/components/Title.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const { isSegmentCollapsed, collapseSegmentNav } = useNavigationCollapse();

const dataTableItems = [
  { name: 'Jim', email: 'mail@mail.com', lifetimeRevenue: '$30.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'John', email: 'mail@mail.com', lifetimeRevenue: '$10.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Mary', email: 'mail@mail.com', lifetimeRevenue: '$50.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Sue', email: 'mail@mail.com', lifetimeRevenue: '$670.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Chaz', email: 'mail@mail.com', lifetimeRevenue: '$40.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Merry', email: 'mail@mail.com', lifetimeRevenue: '$13.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Sue', email: 'mail@mail.com', lifetimeRevenue: '$45.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Dino', email: 'mail@mail.com', lifetimeRevenue: '$67.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Mike', email: 'mail@mail.com', lifetimeRevenue: '$34.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
];

defineProps({
  msg: String,
})

const count = ref(0);
</script>

<template>
  <div class="r-container-fluid">
    <Title title="Data tables" primary-action="Add customer" secondary-action="Export" />
    <div class="r-grid-fitted">
      <div class="r-grid-item r-flex-none r-mt-3 segment-column" :class="{'is-collapse': isSegmentCollapsed}">
        <div class="segment-column">
          <div class="segment-column-category-title r-cursor-pointer is-open">
            <strong class="segment-category r-inline-3">Starred</strong>
          </div>
          <ul class="list list-group list-compact">
            <li class="list-item">
              <a href="" class="r-d-flex r-justify-content-between segment-link active">
                <span title="Customers" class="r-text-left segment-link-name">Customers</span>
                <span class="segment-link-count">110</span>
              </a>
            </li>
            <li class="list-item">
              <a href="" class="r-d-flex r-justify-content-between segment-link">
                <span title="Active Subscriptions" class="r-text-left segment-link-name">Active Subscriptions</span>
                <span class="segment-link-count">58</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="segment-column">
          <div class="segment-column-category-title r-cursor-pointer is-open">
            <strong class="segment-category r-inline-3">Customers</strong>
          </div>
          <ul class="list list-group list-compact">
            <li class="list-item">
              <a href="" class="r-d-flex r-justify-content-between segment-link active">
                <span title="Customers" class="r-text-left segment-link-name">Customers</span>
                <span class="segment-link-count">110</span>
              </a>
            </li>
            <li class="list-item">
              <a href="" class="r-d-flex r-justify-content-between segment-link">
                <span title="Active Subscriptions" class="r-text-left segment-link-name">Leads</span>
                <span class="segment-link-count">58</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="segment-column">
          <div>
            <div class="segment-column-category-title r-cursor-pointer">
              <strong class="segment-category r-inline-3">Payments</strong>
            </div>
          </div>
        </div>
        <div class="segment-column">
          <div>
            <div class="segment-column-category-title r-cursor-pointer">
              <strong class="segment-category r-inline-3">Payments</strong>
            </div>
          </div>
        </div>
        <div class="segment-column">
          <div>
            <div class="segment-column-category-title r-cursor-pointer">
              <strong class="segment-category r-inline-3">Billing</strong>
            </div>
          </div>
        </div>
        <div class="segment-column">
          <div>
            <div class="segment-column-category-title r-cursor-pointer">
              <strong class="segment-category r-inline-3">Logs</strong>
            </div>
          </div>
        </div>
        <div class="segment-column">
          <div>
            <div class="segment-column-category-title r-cursor-pointer">
              <strong class="segment-category r-inline-3">KYC</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="r-grid-item">
        <div class="tile">
          <div class="tile-content r-inset-2">
            <div class="r-grid-fitted r-justify-content-between">
              <div class="r-grid-item">
                <RButton class="r-inline-2" type="plain" icon="collapse-segments" @click="collapseSegmentNav" />
                <h3 class="r-d-inline-block r-m-0">Customers</h3>
              </div>
              <div class="r-grid-item r-flex-none">
                <RButton class="r-inline-2" type="plain" icon-left="filter">Filters<span class="segment-link-count r-ml-3">2</span></RButton>
                <RButton class="r-inline-2" type="plain" icon-left="star-empty">Toggle starred</RButton>
                <RButton class="r-inline-2" type="plain" icon-left="columns">Edit columns</RButton>
                <RButton type="plain" icon-left="reset">Refresh</RButton>
              </div>
            </div>
          </div>
          <div class="tile-content r-pt-2 r-pr-5 r-pb-2 r-pl-5">
            <div class="r-grid-fitted r-align-items-center">
              <RCheckbox />
              <span class="r-text-muted r-inline-4">0 rows selected</span>
              <RButton class="r-inline-2" type="plain" icon-left="merge" :disabled="true">Merge duplicate customers</RButton>
            </div>
          </div>
          <div class="divider r-m-0"></div>
          <RRepeater :provider="dataTableItems" class="is-hoverable">
            <template #headers>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Lifetime revenue</th>
              <th>Last payment</th>
              <th>Creation time</th>
            </template>
            <template #default="{ item }">
              <tr>
                <td><RCheckbox /></td>
                <td><RButton @click="router.push({name: 'customer-details'})" type="unstyled">{{ item.name }}</RButton></td>
                <td>{{ item.email }}</td>
                <td class="is-numeric">{{ item.lifetimeRevenue }}</td>
                <td>{{ item.lastPayment }}</td>
                <td>{{ item.creationTime }}</td>
              </tr>
            </template>
          </RRepeater>
        </div>
      </div>
    </div>
    <div class="r-text-center r-mt-10">
      Learn about <span class="r-text-primary r-cursor-pointer">data tables</span>.
    </div>
  </div>
</template>

<style scoped>
</style>
