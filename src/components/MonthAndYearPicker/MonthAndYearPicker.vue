<template>
  <v-row>
      <v-col sm="9">
        <v-autocomplete
          v-model="pickedMonth"
          :items="months"
          item-text="title"
          items-value="value"
          hide-details
          label="Miesiąc"
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="pickedYear"
          :items="years"
          hide-details
          label="Rok"
        />
      </v-col>
    </v-row>
</template>

<script src="./MonthAndYearPicker.js" />