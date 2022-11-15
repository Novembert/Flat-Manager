<template>
  <v-app>
    <AppBar />
    <v-main class="pa-4 mt-14">
      <router-view />
    </v-main>
    <AlertsHub :alerts-list="alertsList" />
    <Loader :is-active="isActive" />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppBar from '@/components/AppBar/AppBar.vue'
import AlertsHub from '@/components/AlertsHub/AlertsHub.vue'
import Loader from '@/components/Loader/Loader.vue'

export default {
  name: 'App',
  components: {
    AppBar,
    AlertsHub,
    Loader,
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('loader', ['isActive']),
    ...mapGetters('alerts', ['alertsList']),
  },
  beforeMount() {
    this.fetchUser()
  },
  methods: {
    ...mapActions('user', ['fetchUser']),
  },
}
</script>
