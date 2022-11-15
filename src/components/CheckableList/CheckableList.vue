<template>
  <v-list lines="two">
    <v-list-item
      v-for="item of items"
      :key="item.id"
      :class="['px-0', calculateDateDiff(item.deadline) < 0 && item.checked && 'good']"
    >
      <v-checkbox v-model="item.checked" hide-details :color="checkboxColor" @change="check(item)" />
      <div class="flex-grow-1 ml-2">
        <v-list-item-title>{{
          item.value ? `${item.value} ${item.currency} | ${item.name}` : item.name
        }}</v-list-item-title>
        <v-list-item-subtitle
          v-if="item.deadline"
          :class="[
            calculateDateDiff(item.deadline) <= 0 && 'font-weight-bold',
            calculateDateDiff(item.deadline) < 0 && 'text-error',
          ]"
        >
          {{ item.deadline }}
          <v-badge
            v-if="calculateDateDiff(item.deadline) <= 0"
            :color="calculateDateDiff(item.deadline) < 0 ? 'error' : 'warning'"
            content="!"
            inline
          />
        </v-list-item-subtitle>
      </div>
      <slot :row="item" name="extra"> </slot>
    </v-list-item>
  </v-list>
</template>

<script src="./CheckableList.js" />
<style lang="scss" src="./CheckableList.scss" scoped />
