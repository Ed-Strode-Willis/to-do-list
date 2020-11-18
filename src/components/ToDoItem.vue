<template>
  <v-card class="ma-2 pa-1 pl-4  pr-4">
    <v-row align="center" justify="center">
      <v-col cols="8" sm="10">
        <h3>{{ toDo }}</h3>
      </v-col>
      <v-col cols="2" sm="1">
        <v-checkbox v-model="toDoStatus" @click.stop="toggleToDo(toDo)" />
      </v-col>
      <v-col cols="2" sm="1">
        <v-icon style="margin-bottom: 6px;" @click="removeToDo(toDo)">mdi-close</v-icon>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ToDoItem",
  props: {
    toDo: String,
    toDoStatus: Boolean,
  },
  methods: {
    ...mapActions(["removeToDo", "toggleToDo"]),
  },
};
</script>
