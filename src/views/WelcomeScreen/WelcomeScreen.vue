<template>
  <SectionLink v-for="link of links.slice(1)" :key="link.title" class="mb-4 d-block" v-bind="link" />
</template>

<script src="./WelcomeScreen.js" />
