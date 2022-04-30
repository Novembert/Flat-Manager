<template>
  <div v-for="input of inputs" :key="input.name">
    <v-autocomplete 
      v-if="input.type === 'autocomplete'"
      :item-text="input.itemText"
      :item-value="input.itemValue"
      :items="input.items"
      :rules="input.rules"
      :name="input.name"
      :label="input.label"
      v-model="value[input.name]"
    />
    <v-text-field
      v-else
      :label="input.label"
      :type="input.type"
      :rules="input.rules"
      :name="input.name"
      v-model="value[input.name]"
    />
  </div>
</template>

<script src="./FactoryFormInputs.js" />