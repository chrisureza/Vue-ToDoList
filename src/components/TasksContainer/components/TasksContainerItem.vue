<template>
  <div class="tasks-container-item">
    <div class="title">
      <p>{{ label }}</p>
    </div>
    <div class="content" v-if="tasks.length">
      <div v-for="(task, taskIndex) in tasks" :key="`${label}-${taskIndex}`">
        <TaskCard :text="task.text" :status="task.status" />
      </div>
    </div>
    <div class="content" v-if="!tasks.length">
      <div class="no-tasks-msg">
        <span> there are no tasks to show </span>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard";

export default {
  name: "TasksContainerItem",
  props: {
    label: {
      type: String,
      default: () => "Pending"
    },
    tasks: {
      type: Array,
      default: () => []
    }
  },
  components: { TaskCard }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/colors.scss";

.tasks-container-item {
  .title {
    height: 24px;
    margin-bottom: 16px;

    p {
      position: absolute;
      width: 100%;
      margin-left: -16px;
      padding-left: 16px;
      background: #dedcd2;
      border: 1px solid $timberwolf;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 2px 3px rgba(0, 0, 0, 0.07);
      color: $arrowtown;

      @media (min-width: 640px) {
        position: inherit;
        margin-left: 0;
      }
    }
  }

  .content {
    .no-tasks-msg {
      text-align: center;
      padding: 16px;
      color: $cloudy;
      margin-bottom: 16px;
    }
  }
}
.all-tasks .tasks-container-item .content {
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
}

.specific-tasks .tasks-container-item .content {
  @media (min-width: 640px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
