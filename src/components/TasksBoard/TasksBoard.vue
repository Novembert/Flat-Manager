<template>
  <h3 class="mb-4">Date range</h3>
  <MonthAndYearPicker v-model:month="computedRange.month" v-model:year="computedRange.year" />
  <v-divider class="my-4" />
  <h3 class="mb-4 calendar-switch">
    <span>Callendar view</span>
    <v-switch v-model="showCallendar" color="info" hide-details density="compact" />
  </h3>
  <TasksCalendar v-if="showCallendar" :tasks="tasks" :range="range" />
  <v-divider class="my-4" />
  <h3>Tasks list</h3>
  <slot> </slot>
</template>

<script src="./TasksBoard.js" />
