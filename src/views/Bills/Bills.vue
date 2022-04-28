<template>
  <h3 class="mb-4">Zakres</h3>
  <MonthAndYearPicker
    v-model:month="month"
    v-model:year="year"
  />
  <v-divider class="my-4" />
  <h3 class="mb-4 calendar-switch">
    <span>Widok kalendarza</span>
    <v-switch 
      color="info" 
      hide-details
      density="compact"
      v-model="showCallendar"
    />
  </h3>
  <TasksCalendar v-if="showCallendar" :tasks="bills" />
  <v-divider class="my-4"/>
  <h3>Lista</h3>
  <CheckableList :items="bills" checkbox-color="blue-grey  darken-1" />
</template>

<script src="./Bills.js" />