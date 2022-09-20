<template>
  <v-menu v-model="menu" :close-on-click="true" location="start">
    <template #activator="{ props }">
      <v-btn icon size="small" class="profile-avatar" v-bind="props">
        <img referrerpolicy="no-referrer" :src="profileAvatarImage" />
      </v-btn>
    </template>
    <v-card min-width="150">
      <v-list>
        <v-list-item class="px-0">
          <v-btn variant="flat" class="d-flex justify-start w-100" prepend-icon="mdi-logout" @click="logout">
            Wyloguj się
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script src="./ProfileMenu.js" />
<style lang="scss" scoped src="./ProfileMenu.scss" />
