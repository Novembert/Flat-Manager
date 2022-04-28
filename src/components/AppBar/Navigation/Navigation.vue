<template>
  <v-navigation-drawer
    v-model="drawer"
    bottom
    temporary
    floating
  >
    <template
      v-for="link of links"
      :key="link.to">
        <router-link
          v-if="link.to"
          :to="link.to"
          @click="drawer = false"
        >
          <v-btn
            flat
            :class="[link.background, 'section-link py-6']"
          >
            <font-awesome-icon :icon="link.icon" color="white" />
            <h3 class="text-white ml-4">{{ link.title }}</h3>
          </v-btn>  
        </router-link>
      </template>
  </v-navigation-drawer>
</template>

<script src="./Navigation.js" />
<style lang="scss" src="./Navigation.scss" />
