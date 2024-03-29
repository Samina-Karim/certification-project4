import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  faTimes,
  faEdit,
  faBars,
  faCirclePlus,
  faArrowUp,
  faArrowDown,
  faUser,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  createTaskListAction,
  deleteTaskListAction,
  updateTaskListAction,
} from "../reducers/taskListReducer";

const Dashboard = ({
  // taskLists,
  changeSelectedTaskList,
  selectedTaskList,
  // createTaskList,
  // deleteTaskList,
  // updateTaskList,
  enableEditingTaskList,
  isEditingTaskList,
  newTask,
  newTaskStatus,
}) => {
  /*--------- REDUX ----------*/
  const dispatch = useDispatch();
  const taskLists = useSelector((store) => store.taskLists);

  /****** CREATE TASKLIST*******/
  const createTaskList = (newTaskList) => {
    console.log("Creating task");
    /*---------- NON REDUX ---------*/
    // setTaskLists([...taskLists, newTaskList]);
    /*----------  REDUX --------------*/
    dispatch(createTaskListAction(newTaskList));

    newTaskStatus(false);
  };

  /****** DELETE TASKLIST*******/
  const deleteTaskList = (e, taskId) => {
    e.preventDefault();
    console.log("Deleting task");
    /*----------  REDUX --------------*/
    dispatch(deleteTaskListAction(taskId));
    /*---------- NON REDUX ---------*/
    // const newTaskLists = taskLists.filter((task) => task.id !== taskId);
    // setTaskLists(newTaskLists);
  };

  /****** UPDATE TASKLIST*******/
  const updateTaskList = (e, taskId) => {
    console.log("E ", e);
    console.log("In Update Task List");
    enableEditingTaskList("true");

    const newName = e.target.value;

    console.log(newName);
    /*----------   REDUX ---------*/
    dispatch(updateTaskListAction({ taskId: taskId, newName: newName }));

    /*---------- NON REDUX ---------*/
    // setTaskLists((prevTaskLists) => {
    //   return prevTaskLists.map((taskList) => {
    //     if (taskList.id === taskId) {
    //       // Return a new taskList object with the updated name
    //       return { ...taskList, name: newName };
    //     }
    //     return taskList;
    //   });
    // });

    console.log("Updated TaskLists", taskLists);
  };

  return (
    <div>
      <ul>
        {taskLists.map((item, index, list) => (
          <li
            key={item.id}
            className="task-list"
            onClick={(e) => {
              !isEditingTaskList && changeSelectedTaskList(e, item.id);
            }}
            style={{
              cursor: "pointer",
              color: selectedTaskList === item.id ? "#4285F4" : "black",
              backgroundColor:
                selectedTaskList === item.id ? "#f0f0f0" : "transparent",
            }}
          >
            {selectedTaskList === item.id && isEditingTaskList ? (
              <input
                id="newTaskName"
                type="text"
                required
                onChange={(e) => {
                  updateTaskList(e, item.id);
                }}
                onBlur={() => {
                  enableEditingTaskList(false);
                }}
              />
            ) : (
              <div>{item.name}</div>
            )}

            {selectedTaskList === item.id && !isEditingTaskList && !newTask ? (
              <div>
                {/************* EDIT ******************* */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    enableEditingTaskList(true);
                  }}
                  className="icon-button"
                  title="Edit"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>

                {/************** DELETE ****************** */}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTaskList(e, item.id);
                  }}
                  className="icon-button"
                  title="Delete"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ) : (
              <div></div>
            )}

            <div>
              <br></br>
              {taskLists[index].id === taskLists[taskLists.length - 1].id &&
              newTask ? (
                <input
                  id="newTaskName"
                  className="task-list"
                  type="text"
                  required
                  onChange={(e) => {
                    console.log("Input Value:", e.target.value);
                  }}
                  onBlur={(e) => {
                    const myRandomId = uuidv4();
                    const newTaskList = {
                      id: myRandomId,
                      name: e.target.value,
                      subTaskLists: [],
                    };
                    createTaskList(newTaskList);
                  }}
                />
              ) : (
                <div></div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="main-options">
        <button onClick={() => onUpload(task.id)} className="icon-large">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>

        <button
          onClick={(e) => {
            newTaskStatus(true);
          }}
          className="icon-large"
        >
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
        <button onClick={() => onSave(task.id)} className="icon-large">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
