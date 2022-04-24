<template>
  <v-card elevation="3" :class="['py-2 px-4 section-link', background]">
    <v-badge
      class="section-link__badge"
      color="warning"
      :content="notifications"
      inline
    />
    <h2 class="text-white">{{ title }}</h2>
    
    <v-icon v-if="icon" class="section-link__icon">
      {{ icon }}
    </v-icon>
  </v-card>
</template>

<script src="./SectionLink.js" />
<style lang="scss" src="./SectionLink.scss" scoped />