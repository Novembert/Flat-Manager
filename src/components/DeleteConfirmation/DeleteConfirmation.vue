<template>
  <v-card class="pt-2 pb-6 px-4 dialog-card">
    <v-card-title class="px-0 mb-2 d-flex justify-space-between">
      <span class="text-h5">{{ heading }}</span>
    </v-card-title>
    <v-card-subtitle>Tej operacji nie da się cofnąć</v-card-subtitle>
    <v-card-actions id="delete-file-actions" class="justify-end">
      <v-btn @click="$emit('cancel')"> Nie </v-btn>
      <v-btn class="ml-4" color="success" @click="$emit('submit')">Tak</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./DeleteConfirmation.js" />
<style src="./DeleteConfirmation.scss" scoped lang="scss" />
