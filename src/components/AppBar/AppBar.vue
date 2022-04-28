<template>
  <v-app-bar 
    color="primary"
    density="compact">
    <template #prepend>
      <v-app-bar-nav-icon @click="navOpen = !navOpen"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Mieszkanie / {{ pageTitle }}</v-app-bar-title>
  </v-app-bar>
  <Navigation v-model:open="navOpen" />
</template>

<script src='./AppBar.js' />