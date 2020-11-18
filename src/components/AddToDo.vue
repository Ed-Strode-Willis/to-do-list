<template>
  <v-row class="pr-6 pl-6" align="center" justify="center">
    <v-text-field
      clearable
      v-model="newToDo"
      label="What's next?"
      @keyup.enter="addToDo"
    >
      <v-icon slot="append-outer" @click="addToDo()"
        >mdi-plus-circle</v-icon
      >
    </v-text-field>
  </v-row>
</template>

<script>
export default {
  name: "ToDoList",
  data: function () {
    return {
      newToDo: null,
    };
  },
  methods: {
    addToDo() {
      // Avoided using mapActions here for brevity
      this.$store.dispatch("addToDo", this.newToDo);
      this.resetAddToDo();
    },
    resetAddToDo() {
      this.newToDo = null;
    },
  },
};
</script>

