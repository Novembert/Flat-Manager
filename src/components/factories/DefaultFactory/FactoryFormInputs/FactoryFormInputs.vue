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
    <Scheduler v-else-if="input.type === 'scheduler'" v-model="value[input.name]" />
    <v-text-field v-else v-model="value[input.name]" v-bind="input" />
  </div>
</template>

<script src="./FactoryFormInputs.js" />
