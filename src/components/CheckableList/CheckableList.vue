<template>
   <v-list lines="two">
      <v-list-item 
        :class="['px-0', calculateDateDiff(item.deadline) > 0 && item.checked && 'good']"
        v-for="item in computedItems"
        :key="item.id"
      >
        <v-list-item-avatar start>
          <v-checkbox v-model="item.checked" hide-details :color="checkboxColor" />
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>{{ item.value ? `${item.value} | ${item.name}` : item.name }}</v-list-item-title>
          <v-list-item-subtitle
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
        </v-list-item-header>
        <v-list-item-avatar end>
          <AttachmentsManager />
        </v-list-item-avatar>
      </v-list-item>
   </v-list>
</template>

<script src="./CheckableList.js" />
<style lang="scss" src="./CheckableList.scss" scoped />