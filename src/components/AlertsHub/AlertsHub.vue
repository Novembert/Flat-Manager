<template>
  <teleport to="#app">
    <TransitionGroup id="alerts-hub" class="d-flex flex-direction-column px-2 py-2" tag="div" name="list">
      <v-alert
        v-for="alert in alertsList"
        :key="alert.id"
        border="bottom"
        prominent
        density="default"
        :type="alert.type"
        class="mt-2"
      >
        {{ alert.content }}
      </v-alert>
    </TransitionGroup>
  </teleport>
</template>

<script src="./AlertsHub.js" />
<style lang="scss" src="./AlertsHub.scss" scoped />
