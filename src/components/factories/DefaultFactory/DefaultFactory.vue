<template>
  <v-dialog :model-value="isOpen" @click:outside="cancel">
    <template #activator>
      <div>
        <v-btn size="small" color="success" prepend-icon="mdi-plus" @click="isOpen = true"> Dodaj </v-btn>
      </div>
    </template>
    <v-card class="py-2 px-4 dialog-card">
      <v-card-title class="px-0 mb-2 d-flex justify-space-between">
        <span class="text-h5">{{ factoryTitle }}</span>
      </v-card-title>
      <v-form v-model="valid" @submit="submitForm">
        <FactoryFormInputs v-model="formData" :inputs="filteredInputs" />
        <v-card-actions class="justify-end">
          <v-btn @click="cancel"> Anuluj </v-btn>
          <v-btn class="ml-4" color="success" type="submit">Zapisz</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script src="./DefaultFactory.js" />
