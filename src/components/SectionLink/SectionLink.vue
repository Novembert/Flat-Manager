<template>
  <router-link :to="destination">
    <v-btn elevation="3" :class="['py-2 px-4 section-link', background]">
      <v-badge
        class="section-link__badge"
        color="warning"
        :content="notifications"
        inline
      />
      <h2 class="text-white section-link__title">{{ title }}</h2>
      
      <font-awesome-icon class="section-link__icon" :icon="icon" />
    </v-btn>
  </router-link>
</template>

<script src="./SectionLink.js" />
<style lang="scss" src="./SectionLink.scss" scoped />