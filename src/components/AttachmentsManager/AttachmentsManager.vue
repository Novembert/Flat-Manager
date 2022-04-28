<template>
  <v-dialog :model-value="open" @click:outside="open = false">
    <template #activator>
      <div>
        <v-btn
          class="text-none mr-2"
          size="small"
          icon="mdi-paperclip"
          @click="open = true"
        >
        </v-btn>
        <v-badge color="info" class="badge" v-if="files?.length" :content="files.length">
        </v-badge>
      </div>
    </template>
     <v-card class="pt-2 pb-6 px-4 card">
       <v-card-title class="px-0 mb-2 d-flex justify-space-between">
          <span class="text-h5">Załączniki</span>
          <v-btn
            :icon="addAttachmentMode ? 'mdi-arrow-left' : 'mdi-plus'"
            size="x-small"
            :color="addAttachmentMode ? 'cancel' : 'success'"
            @click="addAttachmentMode = !addAttachmentMode">
          </v-btn>
        </v-card-title>
        <div class="add-attachment-form" v-if="addAttachmentMode">
          <v-file-input
            v-model="filesToSave"
            density="compact"
            variant="outlined"
            hide-details
            multiple
          />
          <v-btn
            :disabled="filesToSave.length === 0"
            color="success"
            class="my-2"
            @click="save"
          >
            Zapisz
          </v-btn>
          <v-divider />
        </div>
        <v-list :key="JSON.stringify(files)">
          <v-list-item
            class="px-0"
            v-for="(file, index) of files"
            :key="file.name"
          >
            <v-list-item-header>
              <v-list-item-title>{{ file.name }}</v-list-item-title>
            </v-list-item-header>
            
            <v-btn
              class="mx-2"
              icon="mdi-download"
              size="x-small"
            >
            </v-btn>
            <v-btn
              icon="mdi-delete"
              size="x-small"
              color="error"
              @click="deleteFile(index)"
            >
            </v-btn>
          </v-list-item>
        </v-list>
     </v-card>
  </v-dialog>
</template>

<script src="./AttachmentsManager.js" />
<style src="./AttachmentsManager.scss" scoped lang="scss" />