<template>
  <v-row>
    <v-col sm="9">
      <v-autocomplete
        v-model="pickedMonth"
        :items="months"
        item-title="title"
        items-value="value"
        hide-details
        label="Month"
      />
    </v-col>
    <v-col>
      <v-autocomplete v-model="pickedYear" :items="years" hide-details label="Year" />
    </v-col>
  </v-row>
</template>

<script src="./MonthAndYearPicker.js" />
