import React, { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate,onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChance = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChance = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
        debugger
        onUpdate(task.id, title, taskDesc)
    }
    else{
        onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <form className="task-form">
            <label className="task-label">Başlığı düzenleyin</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChance}
            />
            <label className="task-label">Taskı düzenleyin</label>
            <textarea
              className="task-input"
              value={taskDesc}
              onChange={handleTaskChance}
              rows={5}
            />
            <button className="task-update-btn" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChance}
            />
            <label className="task-label">Task Giriniz</label>
            <textarea
              className="task-input"
              value={taskDesc}
              onChange={handleTaskChance}
              rows={5}
            />
            <button className="task-btn" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
