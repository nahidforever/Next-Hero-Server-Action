import { AddTasks } from "@/componnents/AddTasks";
import TasksCard from "@/componnents/TasksCard";
import { getTasks } from "@/lib/task";
import React from "react";
import { createTask } from "../../lib/action";
import Link from "next/link";
import { Button } from "@heroui/react";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <h2>Tasks: {tasks.length}</h2>

      <AddTasks createTask={createTask}></AddTasks>

      <Link href={"/tasks/new"}>
        <Button variant="secondary">Add Task</Button>
      </Link>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}></TasksCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
