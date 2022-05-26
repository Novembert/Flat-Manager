<template>
  <div v-for="input of inputs" :key="input.name">
    <v-autocomplete
      v-if="input.type === 'autocomplete'"
      v-model="value[input.name]"
      :item-text="input.itemText"
      :item-value="input.itemValue"
      :items="input.items"
      :rules="input.rules"
      :name="input.name"
      :label="input.label"
    />
    <v-text-field
      v-else
      v-model="value[input.name]"
      :label="input.label"
      :type="input.type"
      :rules="input.rules"
      :name="input.name"
    />
  </div>
</template>

<script src="./FactoryFormInputs.js" />
