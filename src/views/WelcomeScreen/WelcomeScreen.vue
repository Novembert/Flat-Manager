<template>
  <div>
    <SectionLink 
      v-for="link in links" 
      :key="link.title" 
      class="mb-4" 
      :title="link.title" 
      :icon="link.icon"
      :background="link.background"
    />
  </div>
</template>

<script src="./WelcomeScreen.js" />