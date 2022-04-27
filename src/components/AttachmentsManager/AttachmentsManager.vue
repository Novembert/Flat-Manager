<template>
  <v-dialog :model-value="open" @click:outside="open = false">
    <template #activator>
      <v-btn
        class="ma-2"
        icon="mdi-paperclip"
        size="small"
        @click="open = true"
      ></v-btn>
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
        <v-list>
          
        </v-list>
     </v-card>
  </v-dialog>
</template>

<script src="./AttachmentsManager.js" />
<style src="./AttachmentsManager.scss" scoped lang="scss" />