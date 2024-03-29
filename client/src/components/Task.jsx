import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Task = ({ task, subTask, updateTask, enableEditingTask }) => {
  console.log("Task in Task", task);
  console.log("SubTask in Task", subTask);

  return (
    <>
      <form
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            // If focus moves outside the form, disable editing
            enableEditingTask(false);
          }
        }}
      >
        <input
          type="text"
          value={subTask.name}
          onChange={(e) =>
            updateTask(e, task.id, subTask.id, "name", e.target.value)
          }
        />
        <select
          value={subTask.priority}
          onChange={(e) =>
            updateTask(e, task.id, subTask.id, "priority", e.target.value)
          }
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
        <select
          value={subTask.status}
          onChange={(e) =>
            updateTask(e, task.id, subTask.id, "status", e.target.value)
          }
        >
          <option value="Complete">Complete</option>
          <option value="InComplete">InComplete</option>
        </select>
        <DatePicker
           // Ensure this is a Date object
          selected={subTask.dueDate ? new Date(subTask.dueDate) : null}
          onChange={(date) =>
            updateTask(null, task.id, subTask.id, "dueDate", date)
          }
          dateFormat="MM/dd/yyyy" // Correct date format
        />
      </form>
    </>
  );
};

export default Task;
