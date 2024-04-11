<script setup>
import { useNavigationCollapse } from '@/composables/use-navigation-collapse';

const { isCollapse } = useNavigationCollapse();
</script>

<template>
  <nav :class="{'is-collapse': isCollapse}">
    <section class="nav-updates">
      <div class="r-d-flex r-position-relative r-align-items-center nav-button">
        <RIcon icon="rebilly-icon"/>
        <span class="r-ml-3">October updates</span>
      </div>
    </section>
    <section class="nav-main">
      <div class="r-d-flex r-position-relative r-align-items-center nav-button">
        <RIcon icon="dashboard"/>
        <span class="r-ml-3">KPIs</span>
      </div>
      <RouterLink to="/" class="r-d-flex r-position-relative r-align-items-center nav-button">
        <RIcon icon="lists"/>
        <span class="r-ml-3">Data tables</span>
      </RouterLink>
      <div class="r-d-flex r-position-relative r-align-items-center nav-button">
        <RIcon icon="automation"/>
        <span class="r-ml-3">Automations</span>
      </div>
      <div class="r-d-flex r-position-relative r-align-items-center nav-button">
        <RIcon icon="app-store"/>
        <span class="r-ml-3">App store</span>
      </div>
      <div class="r-d-flex r-position-relative r-align-items-center nav-button">
        <RIcon icon="reports"/>
        <span class="r-ml-3">Reports</span>
      </div>
    </section>
    <section class="nav-settings">
      <div class="r-d-flex r-position-relative r-align-items-center nav-button">
        <RIcon icon="guides"/>
        <span class="r-ml-3">Guides</span>
      </div>
      <RouterLink to="/settings" class="r-d-flex r-position-relative r-align-items-center nav-button">
        <RIcon icon="settings"/>
        <span class="r-ml-3">Settings</span>
      </RouterLink>
    </section>
  </nav>
</template>
