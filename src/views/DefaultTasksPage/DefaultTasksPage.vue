<template>
  <div class="d-flex justify-end mb-2">
    <DefaultFactory
      v-model:open="showTasksFactory"
      v-model:initData="tasksFormData"
      :hide="factoryConfig.hide"
      :factory-title="editMode ? factoryConfig.editTask : factoryConfig.addTask"
      @on-submit="submitTasksFactory"
      @cancel="editMode = false"
    />
  </div>
  <TasksBoard v-model:range="range" :tasks="tasks">
    <CheckableList :checkbox-color="checkColor" :items="tasks" @check="checkTask" @files-change="taskFilesChange">
      <template #extra="data">
        <AttachmentsManager
          :files="data.row.files"
          @attachments-change="(files) => taskFilesChange({ files, task: data.row })"
        />
        <MiniToolbar
          @submit-delete="tasksControllerInstance.deleteTask(data.row, errorMessages.deleteTaskMessage)"
          @submit-edit="openEditTask(data.row)"
        />
      </template>
    </CheckableList>
  </TasksBoard>
</template>
<script src="./DefaultTasksPage.js" />
