<template>
  <MonthAndYearPicker
    class="mb-2"
    v-model:month="month"
    v-model:year="year"
  />
  <v-divider />
  <CheckableList :items="bills" checkbox-color="blue-grey  darken-1" />
</template>

<script src="./Bills.js" />