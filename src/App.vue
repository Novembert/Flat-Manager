<template>
  <v-app>
    <AppBar />
    <v-main class="pa-4 mt-14">
      <router-view />
    </v-main>
    <AlertsHub />
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar/AppBar.vue'
import AlertsHub from '@/components/AlertsHub/AlertsHub.vue'

export default {
  name: 'App',
  components: {
    AppBar,
    AlertsHub,
  },

  data: () => ({
    //
  }),
}
</script>
