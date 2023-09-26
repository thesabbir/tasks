import { useState } from 'react';
import { uuidv4 } from '@/lib/uuid';

type Task = {
  id: string;
  title: string;
  hours: number;
  created: Date;
  updated: Date;
};

export type TaskInput = {
  title: string;
  hours: number;
};

type Stats = {
  totalTasks: number;
  totalDays: number;
  totalHours: number;
};

export const useTasks = () => {
  const [taskList, setTaskState] = useState<Task[]>([]);
  const [taskStats, setTaskStats] = useState<Stats>({
    totalTasks: 0,
    totalHours: 0,
    totalDays: 0,
  });

  /**
   * Add a new task
   * @param task This the task object
   */
  const addTask = (task: TaskInput) => {
    if (!task.title || task.title === '' || task.title.length > 128) {
      throw new Error('invalid task title');
    }
    if (!Number.isInteger(task.hours) || task.hours === 0 || task.hours > 24) {
      throw new Error('invalid task hours');
    }
    const newTask: Task = {
      id: uuidv4(),
      created: new Date(),
      updated: new Date(),
      ...task,
    };
    setTaskState([...taskList, newTask]);
    setTaskStats({
      totalTasks: taskStats.totalTasks + 1,
      totalHours: taskStats.totalHours + task.hours,
      totalDays: (taskStats.totalHours + task.hours) / 8,
    });
  };

  const deleteTask = (taskId: string) => {
    /**
     * Delete task by filtering it out
     */
    setTaskState(
      taskList.filter((task) => {
        if (task.id === taskId) {
          setTaskStats({
            totalTasks: taskStats.totalTasks - 1,
            totalHours: taskStats.totalHours - task.hours,
            totalDays: (taskStats.totalHours - task.hours) / 8,
          });
          return false;
        }
        return true;
      }),
    );
  };

  return {
    taskList,
    addTask,
    deleteTask,
    taskStats,
  };
};
