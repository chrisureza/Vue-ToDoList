<template>
  <div class="">
    <TasksContainer tasksToShow="Pending" />
  </div>
</template>

<script>
import TasksContainer from "@/components/TasksContainer/TasksContainer";

export default {
  name: "AllTasks",
  components: {
    TasksContainer
  }
};
</script>
