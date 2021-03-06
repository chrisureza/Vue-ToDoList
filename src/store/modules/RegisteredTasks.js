export default {
  namespaced: true,
  state: {
    registeredTasks: [
      {
        text: "Do the laundry",
        status: "Completed"
      },
      {
        text: "Buy some milk",
        status: "Missed"
      },
      {
        text: "Pay bills",
        status: "Completed"
      },
      {
        text: "Pick up my nephew at school",
        status: "Completed"
      }
    ]
  },

  mutations: {
    addTask(state, task) {
      state.registeredTasks.unshift(task);
    },
    deleteTask(state, taskText) {
      const taskIndex = state.registeredTasks.indexOf(
        state.registeredTasks.find(task => task.text === taskText)
      );
      state.registeredTasks.splice(taskIndex, 1);
    },
    changeTaskStatus(state, { text, status }) {
      state.registeredTasks.find(task => task.text === text).status = status;
    }
  },
  actions: {
    addTask(context, task) {
      return new Promise(resolve => {
        context.commit("addTask", task);
        resolve();
      });
    },
    deleteTask(context, taskText) {
      return new Promise(resolve => {
        context.commit("deleteTask", taskText);
        resolve();
      });
    },
    changeTaskStatus(context, value) {
      return new Promise(resolve => {
        context.commit("changeTaskStatus", value);
        resolve();
      });
    }
  }
};
