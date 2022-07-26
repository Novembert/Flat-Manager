<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <template #activator="{ props }">
      <v-btn variant="text" class="dots-btn" v-bind="props">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-card min-width="150">
      <v-list>
        <v-list-item class="px-0">
          <v-btn variant="flat" class="d-flex justify-start w-100" prepend-icon="mdi-pencil"> Edytuj </v-btn>
        </v-list-item>
        <v-list-item class="px-0">
          <v-dialog
            key="confirm-delete-dialog"
            :model-value="confirmDeleteDialog"
            @click:outside="confirmDeleteDialog = false"
          >
            <template #activator>
              <v-btn
                variant="flat"
                class="d-flex justify-start w-100 text-error"
                prepend-icon="mdi-delete"
                @click="confirmDeleteDialog = true"
              >
                Usuń
              </v-btn>
            </template>
            <DeleteConfirmation
              heading="Czy na pewno chesz usunąć załącznik?"
              @cancel="confirmDeleteDialog = false"
              @submit="$emit('submitDelete')"
            />
          </v-dialog>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script src="./MiniToolbar.js" />
<style lang="scss" src="./MiniToolbar.scss" scoped />
