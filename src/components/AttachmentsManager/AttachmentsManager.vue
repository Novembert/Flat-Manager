<template>
  <v-dialog key="attachemnts-dialog" :model-value="open" @click:outside="open = false">
    <template #activator>
      <div class="attachments-btn">
        <v-btn class="text-none mr-2" size="small" icon="mdi-paperclip" @click="open = true"> </v-btn>
        <v-badge v-if="files?.length" color="info" class="badge" :content="files.length"> </v-badge>
      </div>
    </template>
    <v-card class="pt-2 pb-6 px-4 dialog-card">
      <v-card-title class="px-0 mb-2 d-flex justify-space-between">
        <span class="text-h5">Załączniki</span>
        <v-btn
          :icon="addAttachmentMode ? 'mdi-arrow-left' : 'mdi-plus'"
          size="x-small"
          :color="addAttachmentMode ? 'cancel' : 'success'"
          @click="addAttachmentMode = !addAttachmentMode"
        >
        </v-btn>
      </v-card-title>
      <div v-if="addAttachmentMode" class="add-attachment-form">
        <v-file-input v-model="filesToSave" density="compact" variant="outlined" hide-details multiple />
        <v-btn :disabled="filesToSave.length === 0" color="success" class="my-2" @click="save"> Zapisz </v-btn>
        <v-divider />
      </div>
      <v-list>
        <v-list-item v-for="file of files" :key="file.url" class="px-0">
          <v-list-item-header>
            <v-list-item-title>{{ file.name }} {{ file.url }}</v-list-item-title>
          </v-list-item-header>

          <v-btn class="mx-2" icon="mdi-download" size="x-small" @click="downloadFile(file)"> </v-btn>
          <v-dialog
            :key="`file-delete-dialog-${file.url}`"
            :model-value="fileDeleteDialog"
            @click:outside="fileDeleteDialog = false"
          >
            <template #activator>
              <v-btn icon="mdi-delete" size="x-small" color="error" @click="fileDeleteDialog = file.url"> </v-btn>
            </template>
            <DeleteConfirmation
              :key="file.url"
              heading="Czy na pewno chesz usunąć załącznik?"
              @cancel="fileDeleteDialog = false"
              @submit="deleteFile()"
            />
          </v-dialog>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script src="./AttachmentsManager.js" />
<style src="./AttachmentsManager.scss" scoped lang="scss" />
