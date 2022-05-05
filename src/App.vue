<template>
  <v-app>
    <AppBar />
    <v-main class="pa-4 mt-14">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar/AppBar.vue'

export default {
  name: 'App',
  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
}
</script>
