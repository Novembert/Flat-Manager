<template>
  <v-autocomplete
    v-model="month"
    :items="months"
    dense
    label="Miesiąc"
  ></v-autocomplete>
</template>

<script src="./Bills.js" />