<template>
  <transition name="fade">
    <div v-if="isActive" class="h-100 w-100 loader-wrapper bg-black">
      <div class="h-screen w-100 loader-container d-flex justify-center align-center">
        <v-progress-circular :size="50" color="green" indeterminate></v-progress-circular>
      </div>
    </div>
  </transition>
</template>

<script src="./Loader.js" />
<style lang="scss" scoped src="./Loader.scss" />
