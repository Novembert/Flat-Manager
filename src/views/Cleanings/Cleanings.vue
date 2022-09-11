<template>
  <div class="d-flex justify-end mb-2">
    <DefaultFactory
      v-model:open="showCleaningsFactory"
      v-model:initData="cleaningsFormData"
      :hide="['value', 'currency']"
      :factory-title="editMode ? 'Edytuj zadanie' : 'Dodaj zadanie'"
      @on-submit="submitCleaningFactory"
      @cancel="editMode = false"
    />
  </div>
  <TasksBoard v-model:range="range" :tasks="cleanings">
    <CheckableList
      checkbox-color="light-green darken-1"
      :items="cleanings"
      @check="checkCleaning"
      @files-change="cleaningFilesChange"
    >
      <template #extra="data">
        <AttachmentsManager
          :files="data.row.files"
          @attachments-change="(files) => cleaningFilesChange({ files, cleaning: data.row })"
        />
        <MiniToolbar @submit-delete="deleteCleaning(data.row)" @submit-edit="openEditCleaning(data.row)" />
      </template>
    </CheckableList>
  </TasksBoard>
</template>
<script src="./Cleanings.js" />
