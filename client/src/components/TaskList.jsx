import React from "react";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import Task from "./Task.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTaskAction,
  updateTaskAction,
} from "../reducers/taskListReducer.js";

const TaskList = ({
  task,
  changeSelectedTask,
  selectedTask,
  // createTask,
  // deleteTask,
  // updateTask,
  enableEditingTask,
  isEditingTask,
}) => {
  /*--------- REDUX ----------*/
  const dispatch = useDispatch();
  const taskLists = useSelector((store) => store.taskLists);

  

  /****** DELETE TASK*******/
  const deleteTask = (e, taskListId, taskId) => {
    e.preventDefault();

    console.log("TaskList ID ", taskListId);
    console.log("Sub Task List ID ", taskId);

    /*---------- REDUX ---------*/
    dispatch(deleteTaskAction({ taskListId: taskListId, taskId: taskId }));

    /*---------- NON REDUX ---------*/
    // setTaskLists((prevTaskLists) => {
    //   // Find the taskList with the given id
    //   const updatedTaskLists = prevTaskLists.map((taskList) => {
    //     if (taskList.id === taskListId) {
    //       // Filter out the subTaskList with the given id
    //       const updatedSubTaskLists = taskList.subTaskLists.filter(
    //         (subTaskList) => subTaskList.id !== taskId
    //       );
    //       // Return the taskList with the updated subTaskLists
    //       return { ...taskList, subTaskLists: updatedSubTaskLists };
    //     }
    //     return taskList;
    //   });
    //   return updatedTaskLists;
    // });
  };

  /****** UPDATE TASK*******/

  const updateTask = (e, taskListId, taskId, field, newValue) => {
    if (e) e.preventDefault();
    console.log("Updating task");
    console.log("E ", e);
    enableEditingTask(true);

    /*---------- REDUX ---------*/
    dispatch(
      updateTaskAction({
        taskListId: taskListId,
        taskId: taskId,
        field: field,
        newValue: newValue,
      })
    );

    /*---------- NON REDUX ---------*/
    // setTaskLists((prevTaskLists) =>
    //   prevTaskLists.map((taskList) => {
    //     // Check if this is the task list we want to update
    //     if (taskList.id === taskListId) {
    //       // Map over the subtasks to find the one we want to update
    //       const updatedSubTaskLists = taskList.subTaskLists.map((subTask) => {
    //         if (subTask.id === taskId) {
    //           // Update the specific field of the subtask
    //           return { ...subTask, [field]: newValue };
    //         }
    //         return subTask;
    //       });

    //       // Return the taskList with the updated subTaskLists
    //       return { ...taskList, subTaskLists: updatedSubTaskLists };
    //     }
    //     return taskList;
    //   })
    // );

    console.log("Updated TaskLists", taskLists);
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "Urgent":
        return { backgroundColor: "	#f8b7cb" };
      case "High":
        return { backgroundColor: "#ffc14a" }; //#ffa6c1
      case "Medium":
        return { backgroundColor: "#feff9c" };
      case "Low":
        return { backgroundColor: "#cdfc93" };
      default:
        return {};
    }
  };

  function TaskDueDate({ subTask }) {
    const dueDate = new Date(subTask.dueDate);
    const isValidDate = dueDate instanceof Date && !isNaN(dueDate);

    return (
      <div>{isValidDate ? dueDate.toLocaleDateString() : "Invalid date"}</div>
    );
  }

  function whatIsSelectedTask() {
    console.log("Selected Task in TaskList", selectedTask);
  }

  return (
    <>
      <div className="subtask-container">
        {task && task.subTaskLists && (
          <div className="subtask-grid">
            {" "}
            {/* Grid to display the subtasks */}
            {whatIsSelectedTask()}
            {task.subTaskLists.map((subTask) => (
              <div
                key={subTask.id}
                className="subtask-item"
                style={getPriorityStyle(subTask.priority)}
              >
                {isEditingTask && selectedTask == subTask.id ? (
                  <>
                    <Task
                      task={task}
                      subTask={subTask}
                      updateTask={updateTask}
                      enableEditingTask={enableEditingTask}
                    />
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      {subTask.name}
                    </div>

                    <div>{subTask.priority}</div>
                    <div>{subTask.status}</div>
                    <TaskDueDate subTask={subTask} />
                  </>
                )}
                <div className="icon-container">
                  {/******* EDIT TASK ************* */}
                  <button
                    onClick={(e) => {
                      enableEditingTask(true);
                      changeSelectedTask(e, task.id, subTask.id);
                    }}
                    className="icon-button"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>

                  {/******* DELETE TASK ************* */}
                  <button
                    onClick={(e) => deleteTask(e, task.id, subTask.id)}
                    className="icon-button"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
