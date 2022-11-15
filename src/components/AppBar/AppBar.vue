<template>
  <v-app-bar color="primary" density="compact">
    <template v-if="getUser" #prepend>
      <v-app-bar-nav-icon @click="navOpen = !navOpen"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Flat-management / {{ pageTitle }}</v-app-bar-title>
    <template #append>
      <ProfileMenu />
    </template>
  </v-app-bar>
  <Navigation v-model:open="navOpen" />
</template>

<script src="./AppBar.js" />
