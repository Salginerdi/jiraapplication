import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

const TaskCreate = ({ task, taskFormUpdate, onUpdate }) => {
  const { editTaskById, createTask } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3 className="headline">Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz!</label>
            <input
              type="text"
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              name=""
              value={taskDesc}
              onChange={handleTaskChange}
              id=""
              cols="30"
              rows="5"
              className="task-input"
            ></textarea>
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3 className="headline">Lütfen Görev Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              type="text"
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Görev Giriniz!</label>
            <textarea
              name=""
              value={taskDesc}
              onChange={handleTaskChange}
              id=""
              cols="30"
              rows="5"
              className="task-input"
            ></textarea>
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;
