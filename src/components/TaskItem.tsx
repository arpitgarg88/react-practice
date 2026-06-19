import type { Task, TaskStatus } from "../types/task";

type TaskItemProps = {
  task: Task;
  onStatusChange: (taskId: number, status: TaskStatus) => void;
};

export function TaskItem({ task, onStatusChange }: TaskItemProps) {
  return (
    <li>
      <p>
        {task.title} -{" "}
        <select
          value={task.status}
          onChange={(event) =>
            onStatusChange(task.id, event.target.value as TaskStatus)
          }
        >
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </p>
    </li>
  );
}
