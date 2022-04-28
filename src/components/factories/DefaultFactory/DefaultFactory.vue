<template>
  <v-dialog :model-value="open" @click:outside="open = false">
    <template #activator>
      <div>
        <v-btn
          size="small" 
          color="success" 
          prepend-icon="mdi-plus"
          @click="open = true"
        >
          Dodaj
        </v-btn>
      </div>
    </template>
     <v-card class="pt-2 pb-6 px-4 dialog-card">
       <v-card-title class="px-0 mb-2 d-flex justify-space-between">
          <span class="text-h5">{{ factoryTitle }}</span>
        </v-card-title>
     </v-card>
  </v-dialog>
</template>

<script src="./DefaultFactory.js" />
