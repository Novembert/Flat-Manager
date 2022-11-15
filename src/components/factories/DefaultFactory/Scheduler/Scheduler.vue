<!-- 
  co n-ty miesiąc
    n-ty dzień
    n-ty dzień tygodnia w n-tym tygodniu
  co n-ty tydzień
    n-ty dzien tygodnia
 -->

<template>
  <div>
    <v-divider />
    <p class="my-5">Interval</p>
    <v-radio-group v-model="computedScheduleConfig.scheduleType" v-bind="inputs.scheduleType">
      <v-radio v-for="item of inputs.scheduleType.items" v-bind="item" :key="item.value" />
    </v-radio-group>
    <!-- <template v-if="computedScheduleConfig.scheduleType === 'monthly-date'">
      <p class="d-inline">
        <v-text-field v-model="computedScheduleConfig[inputs.monthPicker.name]" v-bind="inputs.monthPicker" />
        <v-text-field v-model="computedScheduleConfig[inputs.dayPicker.name]" v-bind="inputs.dayPicker" />
      </p>
    </template>
    <template v-else-if="computedScheduleConfig.scheduleType === 'monthly-week'"></template>
    <template v-else></template> -->
    <!-- <v-text-field
      v-for="input of mappedInputs"
      :key="input.name"
      v-model="computedScheduleConfig[input.name]"
      class="mb-2"
      v-bind="input"
    /> -->
  </div>
</template>

<script src="./Scheduler.js" />
<style lang="scss" scoped src="./Scheduler.scss" />
