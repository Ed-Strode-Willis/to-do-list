<template>
  <v-app >
    <Title />
    <v-row justify="center">
      <ToDoList />
    </v-row>
  </v-app>
</template>

<script>
import ToDoList from "@/components/ToDoList.vue";
import Title from "@/components/Title.vue";

export default {
  name: "App",
  components: { ToDoList, Title }
};
</script>


