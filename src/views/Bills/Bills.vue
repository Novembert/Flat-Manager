<template>
  <div class="d-flex justify-end mb-2">
    <DefaultFactory v-model:open="showBillsFactory" factory-title="Dodaj rachunek" @on-submit="submitAddBill" />
  </div>
  <h3 class="mb-4">Zakres</h3>
  <MonthAndYearPicker v-model:month="range.month" v-model:year="range.year" />
  <v-divider class="my-4" />
  <h3 class="mb-4 calendar-switch">
    <span>Widok kalendarza</span>
    <v-switch v-model="showCallendar" color="info" hide-details density="compact" />
  </h3>
  <TasksCalendar v-if="showCallendar" :tasks="bills" :range="range" />
  <v-divider class="my-4" />
  <h3>Lista</h3>
  <CheckableList checkbox-color="blue-grey  darken-1" :items="bills" @check="checkBill" @files-change="billFilesChange">
    <template #extra="data">
      <AttachmentsManager
        :files="data.row.files"
        @attachments-change="(files) => billFilesChange({ files, bill: data.row })"
      />
      <MiniToolbar @submit-delete="deleteBill(data.row)" />
    </template>
  </CheckableList>
</template>
<script src="./Bills.js" />
