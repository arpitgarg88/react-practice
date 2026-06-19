import { useState } from "react";
import type { Task, TaskStatus } from "../types/task";
import { TaskItem } from "./TaskItem";

import { filterTasksByStatus, updateTaskStatus } from "../utils/taskFilters";

export function TaskBoard({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<TaskStatus | "all">("all");
  const filteredTasks = filterTasksByStatus(tasks, filter);

  const handleStatusChange = (taskId: number, status: TaskStatus): void => {
    setTasks((currentTasks) => updateTaskStatus(currentTasks, taskId, status));
  };

  return (
    <div className="section">
      <h2>Task Board</h2>

      <div style={{ display: "flex", gap: "5px" }}>
        <button
          className={filter === "all" ? "selected" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "pending" ? "selected" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          className={filter === "in_progress" ? "selected" : ""}
          onClick={() => setFilter("in_progress")}
        >
          In Progress
        </button>
        <button
          className={filter === "done" ? "selected" : ""}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p style={{ marginTop: "10px", color: "red" }}>
          No tasks match this filter
        </p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
