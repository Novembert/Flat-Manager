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
      <v-divider class="my-4" />
      <v-tabs v-if="showSchedulerOption" v-model="tab">
        <v-tab value="once">Jednorazowo</v-tab>
        <!-- doesnt work yet  -->
        <!-- <v-tab value="scheduled">Cyklicznie</v-tab> -->
      </v-tabs>
      <v-form ref="form" v-model="valid" class="mt-4" @submit.prevent="submitForm">
        <FactoryFormInputs v-if="filteredInputs" v-model="formData" :inputs="filteredInputs" />
        <v-card-actions class="justify-end">
          <v-btn @click="cancel"> Cancel </v-btn>
          <v-btn class="ml-4" color="success" type="submit">Save</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script src="./DefaultFactory.js" />
