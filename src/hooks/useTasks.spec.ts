import { useTasks } from './useTasks';
import { act, renderHook, waitFor } from '@testing-library/react';

describe('hooks/useTasks', () => {
  test('it should be initialized', () => {
    const { result } = renderHook(() => useTasks());
    const { taskList, addTask, deleteTask, taskStats } = result.current;
    expect(taskList).toBeDefined();
    expect(taskList.length).toBe(0);
    expect(addTask).toBeDefined();
    expect(deleteTask).toBeDefined();
    expect(taskStats).toBeDefined();
    expect(taskStats.totalDays).toBe(0);
    expect(taskStats.totalHours).toBe(0);
    expect(taskStats.totalTasks).toBe(0);
  });
  test('it should be able to add new task with correct stats', async () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      const { addTask } = result.current;
      addTask({
        title: 'Test task',
        hours: 24,
      });
    });
    act(() => {
      const { addTask } = result.current;
      addTask({
        title: 'Test task 2',
        hours: 8,
      });
    });
    await waitFor(() => {
      const { taskStats, taskList } = result.current;
      expect(taskList.length).toBe(2);
      expect(taskList[0].id).toBeDefined();
      expect(taskStats.totalHours).toBe(32);
      expect(taskStats.totalTasks).toBe(2);
      expect(taskStats.totalDays).toBe(4);
    });
  });
  test('it should be able to delete new task with correct stats', async () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      const { addTask } = result.current;
      addTask({
        title: 'Test task',
        hours: 24,
      });
    });
    act(() => {
      const { addTask } = result.current;
      addTask({
        title: 'Test task 2',
        hours: 8,
      });
    });
    act(() => {
      const { taskList, deleteTask } = result.current;
      deleteTask(taskList[1].id);
    });
    await waitFor(() => {
      const { taskStats, taskList } = result.current;
      expect(taskList.length).toBe(1);
      expect(taskStats.totalHours).toBe(24);
      expect(taskStats.totalTasks).toBe(1);
      expect(taskStats.totalDays).toBe(3);
    });
  });

  test('it should be able to throw if the inputs are invalid', async () => {
    const { result } = renderHook(() => useTasks());
    const { addTask } = result.current;
    try {
      addTask({
        title: 'Test task',
        hours: 28,
      });
    } catch (e: any) {
      expect(e).toBeDefined();
      expect(e.message).toBe('invalid task hours');
    }
    try {
      addTask({
        title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        hours: 20,
      });
    } catch (e: any) {
      expect(e).toBeDefined();
      expect(e.message).toBe('invalid task title');
    }
  });
});
