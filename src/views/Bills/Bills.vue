<template>
  <div class="d-flex justify-end mb-2">
    <DefaultFactory
      @on-submit="submitAddBill"
      v-model:open="showBillsFactory"
      factory-title="Dodaj rachunek"
    />
  </div>
  <h3 class="mb-4">Zakres</h3>
  <MonthAndYearPicker
    v-model:month="range.month"
    v-model:year="range.year"
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
  <TasksCalendar v-if="showCallendar" :tasks="bills" :range="range" />
  <v-divider class="my-4"/>
  <h3>Lista</h3>
  <CheckableList 
    checkbox-color="blue-grey  darken-1"
    :items="bills" 
    @check="checkBill" 
    @files-change="billFilesChange"
  />
</template>

<script src="./Bills.js" />