
/*CSS imports*/
import "../index.css";

/* Random Generator */
import { v4 as uuidv4 } from "uuid";

/* Import Icons */
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faUser } from "@fortawesome/free-solid-svg-icons";

/*Component imports*/
import Dashboard from "./Dashboard.jsx";
import TaskList from "./TaskList.jsx";

/* Necessary react imports*/
import React, { useState } from "react";

/* Necessary redux imports*/
import { useDispatch, useSelector } from "react-redux";
import {createTaskAction} from "../reducers/taskListReducer.js";

/* Necessary router imports*/
import { useNavigate } from 'react-router-dom';

const TaskManagerApp = () => {

  let navigate = useNavigate();
  /*--------- REDUX ----------*/
  const dispatch = useDispatch();
  const taskLists = useSelector((store) => store.taskLists);

  /*--------- NON REDUX ----------*/
  // const [taskLists, setTaskLists] = useState([
  //   {
  //     id: 1,
  //     name: "Personal",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Rmnbhfh",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Garden ",
  //         priority: "Low",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 3,
  //         name: "Paint",
  //         priority: "Low",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 4,
  //         name: "Call Mom ",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 5,
  //         name: "Laundry",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 6,
  //         name: "Garden ",
  //         priority: "Medium",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 7,
  //         name: "Dishes",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 8,
  //         name: "Cooking ",
  //         priority: "Low",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 9,
  //         name: "Reading",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 10,
  //         name: "Garden ",
  //         priority: "Medium",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 11,
  //         name: "Planting",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 12,
  //         name: "Teaching ",
  //         priority: "Low",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 13,
  //         name: "Studying",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 14,
  //         name: "Shopping ",
  //         priority: "Medium",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 15,
  //         name: "Reading",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 16,
  //         name: "Garden ",
  //         priority: "Medium",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 17,
  //         name: "Planting",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 18,
  //         name: "Teaching ",
  //         priority: "Low",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 19,
  //         name: "Studying",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 20,
  //         name: "Shopping ",
  //         priority: "Medium",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 21,
  //         name: "Garden ",
  //         priority: "Medium",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 22,
  //         name: "Planting",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 23,
  //         name: "Teaching ",
  //         priority: "Low",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 24,
  //         name: "Studying",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 25,
  //         name: "Shopping ",
  //         priority: "Medium",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Work",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Project 1",
  //         priority: "High",
  //         status: "InComplete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Project 2",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Business",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Project 5",
  //         priority: "Low",
  //         status: "InComplete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Project 6",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Office",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Reno",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Garden ",
  //         priority: "Medium",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Hobbies",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Project 1",
  //         priority: "Medium",
  //         status: "InComplete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Project 2",
  //         priority: "Low",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Vacations",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Project 5",
  //         priority: "Low",
  //         status: "InComplete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Project 6",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     name: "Parents",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Project 5",
  //         priority: "Low",
  //         status: "InComplete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Project 6",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     name: "Siblings",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Project 5",
  //         priority: "Low",
  //         status: "InComplete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Project 6",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     name: "Neighbours",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Project 5",
  //         priority: "Low",
  //         status: "InComplete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Project 6",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     name: "Community",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Project 5",
  //         priority: "Low",
  //         status: "InComplete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Project 6",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     name: "Permits",
  //     subTaskLists: [
  //       {
  //         id: 1,
  //         name: "Project 5",
  //         priority: "Low",
  //         status: "InComplete",
  //         dueDate: "10/01/24",
  //       },
  //       {
  //         id: 2,
  //         name: "Project 6",
  //         priority: "High",
  //         status: "Complete",
  //         dueDate: "10/01/24",
  //       },
  //     ],
  //   },
  // ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTaskList, setSelectedTaskList] = useState(null);
  const [isEditingTaskList, setIsEditingTaskList] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [newTask, setNewTask] = useState("");

  const getTaskLists = () => {
    console.log("In getTaskLists of Task# ", selectedTaskList);
    /*---------- REDUX ---------*/
    //  dispatch(getTaskListAction({ selectedTaskList: selectedTaskList}));

    /*---------- NON REDUX ---------*/
    const lists = taskLists.find((item) => item.id === selectedTaskList);
    return lists;
  };

  const getTaskName = () => {
    console.log("In getTaskName");
    /*---------- REDUX ---------*/
    // dispatch(getTaskNameAction({ selectedTaskList: selectedTaskList}));

    /*---------- NON REDUX ---------*/
    const task = taskLists.find((item) => item.id === selectedTaskList);
    if (task) {
      console.log("Selected Task Name", task);
      return task.name;
    } else return;
  };
  /********************************************************** */
  /***************** DASHBOARD FUNCTION PROPS *************** */
  /********************************************************** */

  /********** SWITCHING BETWEEN TASKLIST **************/
  const changeSelectedTaskList = (e, id) => {
    e.preventDefault();
    console.log("You have clicked list with id: ", id);
    setSelectedTaskList(id);

    setIsEditingTaskList(false);
    setIsEditingTask(false);

    console.log("selectedTaskList: ", selectedTaskList);
  };

  const newTaskStatus = (status) => {
    setNewTask(status);
  };

  const enableEditingTaskList = (condition) => {
    console.log("Condition", condition);
    setIsEditingTaskList(condition);
    console.log("IsEditingTaskList", isEditingTaskList);
  };

  /********************************************************** */
  /***************** TASKLIST FUNCTION PROPS **************** */
  /********************************************************** */
/****** CREATE TASK*******/
const createTask = (e) => {
  e.preventDefault();
  console.log("Creating task");

  const myRandomId = uuidv4();
  const newTask = {
    id: myRandomId,
    name: "NewTask", // Gets the taskName of the selectedTask
    priority: "Low",
    status: "InComplete",
    dueDate: "01/01/24",
  };
  console.log("NewTask", newTask);

  console.log("In Create - SelectedTaskList", selectedTaskList);
  /*---------- REDUX ---------*/
  dispatch(
    createTaskAction({ selectedTaskList: selectedTaskList, newTask: newTask })
  );

  /*---------- NON REDUX ---------*/
  // setTaskLists((prevTaskLists) =>
  //   prevTaskLists.map((taskList) => {
  //     if (taskList.id === selectedTaskList) {
  //       console.log("In Create - TaskListID", taskList.id);
  //       // Aleem asked to use concat to add the new task to the subTaskLists
  //       return { ...taskList, subTaskLists: taskList.subTaskLists.concat(newTask) };
  //       // Another method is as follows:
  //       // return {...taskList,subTaskLists: [...taskList.subTaskLists, newTask]};
  //     }
  //     return taskList; // Return unmodified taskList if not the selected one
  //   })
  // );

  console.log("Prev", taskLists);
  enableEditingTask(true);
  changeSelectedTask(e, selectedTaskList, newTask.id);
};
  /********** SWITCHING BETWEEN TASKS **************/
  const changeSelectedTask = (e, taskId, subTaskId) => {
    if (e) e.preventDefault();
    console.log("You have clicked list with id of: ", taskId, " ", subTaskId);
    setSelectedTask(subTaskId);
    console.log("selectedTask: ", selectedTask);
  };

  const enableEditingTask = (condition) => {
    console.log("Setting state", condition);
    setIsEditingTask(condition);

    console.log("IsEditingTask", isEditingTask);
  };

  
  const handleLogOut = () => {
  
  
      navigate('/');
   
  }

  return (
    <>
      <div className="container">
        
        <div>
          <h1 className="main-title">TASK MANAGER</h1>
        </div>

        <button onClick={() => handleLogOut()} className="icon-login">
          <FontAwesomeIcon icon={faUser} />
        </button>

        <div className="main-container">
          {/************** FIRST COLUMN************* */}
          <div className="first-column">
            <div>
              <h2 className="column-title">TASK LIST</h2>
            </div>

            <div>
              <div className="task-list">
                <Dashboard
                  // taskLists={taskLists}
                  changeSelectedTaskList={changeSelectedTaskList}
                  selectedTaskList={selectedTaskList}
                  // createTaskList={createTaskList}
                  // deleteTaskList={deleteTaskList}
                  // updateTaskList={updateTaskList}
                  enableEditingTaskList={enableEditingTaskList}
                  isEditingTaskList={isEditingTaskList}
                  newTask={newTask}
                  newTaskStatus={newTaskStatus}
                />
              </div>
            </div>
          </div>
          {/************** SECOND COLUMN************* */}
          <div className="second-column">
            <div className="activetask-title">{getTaskName()}</div>
            <div className="second-column">
              {selectedTaskList !== null ? (
                <button
                  onClick={(e) => createTask(e)}
                  className="icon-large"
                  aria-label="Create Task"
                >
                  <FontAwesomeIcon icon={faCirclePlus} />
                </button>
              ) : null}
            </div>
            <div className="tasks-container">
              <TaskList
                task={getTaskLists()}
                changeSelectedTask={changeSelectedTask}
                selectedTask={selectedTask}
                // createTask={createTask}
                // deleteTask={deleteTask}
                // updateTask={updateTask}
                enableEditingTask={enableEditingTask}
                isEditingTask={isEditingTask}
              />
            </div>
          </div>

          {/************** THIRD COLUMN************* */}
          <div className="third-column">
            <h2 className="column-title">SEARCH</h2>
            <div className="search-result"></div>
          </div>
          {/**************************************** */}
        </div>
      </div>
    </>
  );
}

export default TaskManagerApp;
