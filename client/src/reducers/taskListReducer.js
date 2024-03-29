/**
 * Below is an example of a simple reducer, just added it to get the redux toolkit setup going
 * You'll need to make your own reducers, with actions as well to facilitate redux-toolkit
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
      id: 1,
      name: "Personal",
      subTaskLists: [
        {
          id: 1,
          name: "Rmnbhfh",
          priority: "Urgent",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Garden ",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 3,
          name: "Paint",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 4,
          name: "Call Mom ",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 5,
          name: "Laundry",
          priority: "Urgent",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 6,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 7,
          name: "Dishes",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 8,
          name: "Cooking ",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 9,
          name: "Reading",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 10,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 11,
          name: "Planting",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 12,
          name: "Teaching ",
          priority: "Urgent",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 13,
          name: "Studying",
          priority: "Urgent",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 14,
          name: "Shopping ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 15,
          name: "Reading",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 16,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 17,
          name: "Planting",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 18,
          name: "Teaching ",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 19,
          name: "Studying",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 20,
          name: "Shopping ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 21,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 22,
          name: "Planting",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 23,
          name: "Teaching ",
          priority: "Urgent",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 24,
          name: "Studying",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 25,
          name: "Shopping ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 2,
      name: "Work",
      subTaskLists: [
        {
          id: 1,
          name: "Project 1",
          priority: "High",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 2",
          priority: "Urgent",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 3,
      name: "Business",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 4,
      name: "Office",
      subTaskLists: [
        {
          id: 1,
          name: "Reno",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 5,
      name: "Hobbies",
      subTaskLists: [
        {
          id: 1,
          name: "Project 1",
          priority: "Medium",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 2",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 6,
      name: "Vacations",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 7,
      name: "Parents",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 8,
      name: "Siblings",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 9,
      name: "Neighbours",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 10,
      name: "Community",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 11,
      name: "Permits",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
  ]

const taskListSlice = createSlice({
  name: 'taskLists',
  initialState,
  reducers: {
    // getTaskListAction(state,action) {
    //   const { selectedTaskList} = action.payload;
    //   return state.find((item) => item.id === selectedTaskList);
     
    // },
    // getTaskNameAction(state,action) {
    //   const { selectedTaskList} = action.payload;
    //   const task = state.find((item) => item.id === selectedTaskList);
    //   if (task) {
    //     console.log("Selected Task Name", task);
    //     return task.name;
    //   } else return;
    // },
    createTaskListAction(state,action) {
      return state.concat(action.payload)
    },
    deleteTaskListAction(state,action) {
      const id = action.payload
      return state.filter(taskList => taskList.id !== id)
    },
    updateTaskListAction(state, action) {
      const { taskId, newName } = action.payload;
      return state.map(taskList => {
        if (taskList.id === taskId) {
          return { ...taskList, name: newName };
        }
        return taskList;
      });
    },
    createTaskAction(state,action) {
      const { selectedTaskList,newTask} = action.payload;
      return state.map((taskList) => {
        if (taskList.id === selectedTaskList) {
          console.log("In Create - TaskListID", taskList.id);
          // Aleem asked to use concat to add the new task to the subTaskLists
          return { ...taskList, subTaskLists: taskList.subTaskLists.concat(newTask) };
          // Another method is as follows:
          // return {...taskList,subTaskLists: [...taskList.subTaskLists, newTask]};
        }
        return taskList; // Return unmodified taskList if not the selected one
      })
    },

    deleteTaskAction(state,action) {
      const { taskListId,taskId} = action.payload;
      return state.map((taskList) => {
        if (taskList.id === taskListId) {
          // Filter out the subTaskList with the given id
          const updatedSubTaskLists = taskList.subTaskLists.filter(
            (subTaskList) => subTaskList.id !== taskId
          );
          // Return the taskList with the updated subTaskLists
          return { ...taskList, subTaskLists: updatedSubTaskLists };
        }
        return taskList;
      });
      return updatedTaskLists;
    },

    updateTaskAction(state,action) {
      const {taskListId, taskId, field, newValue}= action.payload;
      return state.map((taskList) => {
        // Check if this is the task list we want to update
        if (taskList.id === taskListId) {
          // Map over the subtasks to find the one we want to update
          const updatedSubTaskLists = taskList.subTaskLists.map((subTask) => {
            if (subTask.id === taskId) {
              // Update the specific field of the subtask
              return { ...subTask, [field]: newValue };
            }
            return subTask;
          });

          // Return the taskList with the updated subTaskLists
          return { ...taskList, subTaskLists: updatedSubTaskLists };
        }
        return taskList;
      });
    }
    
  }
})

export const { createTaskListAction, deleteTaskListAction, updateTaskListAction, createTaskAction, deleteTaskAction, updateTaskAction } = taskListSlice.actions;
export default taskListSlice.reducer;