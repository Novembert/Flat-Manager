<template>
  <SectionLink 
    v-for="link in links" 
    :key="link.title" 
    class="mb-4 d-block" 
    :title="link.title" 
    :to="link.to"
    :icon="link.icon"
    :background="link.background"
  />
</template>

<script src="./WelcomeScreen.js" />