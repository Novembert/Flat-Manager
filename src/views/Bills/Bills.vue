<template>
  <div class="d-flex justify-end mb-2">
    <DefaultFactory
      v-model:open="showBillsFactory"
      v-model:initData="billsFormData"
      :factory-title="editMode ? 'Edytuj rachunek' : 'Dodaj rachunek'"
      @on-submit="submitBillFactory"
      @cancel="editMode = false"
    />
  </div>
  <TasksBoard v-model:range="range" :tasks="bills">
    <CheckableList
      checkbox-color="blue-grey  darken-1"
      :items="bills"
      @check="checkBill"
      @files-change="billFilesChange"
    >
      <template #extra="data">
        <AttachmentsManager
          :files="data.row.files"
          @attachments-change="(files) => billFilesChange({ files, bill: data.row })"
        />
        <MiniToolbar @submit-delete="deleteBill(data.row)" @submit-edit="openEditBill(data.row)" />
      </template>
    </CheckableList>
  </TasksBoard>
</template>
<script src="./Bills.js" />
