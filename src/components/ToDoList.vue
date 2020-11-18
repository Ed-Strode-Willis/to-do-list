<template>
  <v-container>
    <AddToDo />
    <ToDoItem
      v-for="(toDo, index) in toDos"
      :key="index"
      :toDo="toDo.title"
      :toDoStatus="toDo.status"
    />
  </v-container>
</template>

<script>
import AddToDo from "@/components/AddToDo.vue";
import ToDoItem from "@/components/ToDoItem.vue";
import { mapState } from "vuex";

export default {
  name: "ToDoList",
  components: { AddToDo, ToDoItem },
  computed: mapState(["toDos"]),
};
</script>
