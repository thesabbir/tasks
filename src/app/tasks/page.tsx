'use client';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { Container } from '@/components/Container';
import { StatsCardContainer, StatsCard } from '@/components/StatsCard';
import { TextInput } from '@/components/TextInput';
import { ActionButton, Button } from '@/components/Button';
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@/components/Table';
import { TaskInput, useTasks } from '@/hooks/useTasks';
import Link from 'next/link';

export default function Tasks() {
  const { taskList, taskStats, addTask, deleteTask } = useTasks();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskInput>();

  useEffect(() => {
    if (errors.hours || errors.title) {
      toast.error(`Validation failed`);
    }
  }, [errors.hours, errors.title]);

  const onSubmit: SubmitHandler<TaskInput> = (data) => {
    try {
      addTask(data);
      toast.success('New task added!');
      reset();
    } catch (e) {
      console.error(e);
      toast.error('Failed to add new task!');
    }
  };

  const onDelete = (taskId: string) => {
    return () => {
      confirmAlert({
        title: 'Confirm Deletion',
        message: 'Are you sure to do this?',
        buttons: [
          {
            label: 'Ok',
            onClick: () => {
              try {
                deleteTask(taskId);
                toast.success('Task deleted!');
              } catch (e) {
                console.error(e);
                toast.error('Failed to add new task!');
              }
            },
          },
          {
            label: 'Cancel',
            onClick: () => {
              toast('Action cancelled.');
            },
          },
        ],
      });
    };
  };

  return (
    <main>
      <Header>
        <Title>Manage Tasks</Title>
        <Link href="/">
          <Button>{'Back to Home'}</Button>
        </Link>
      </Header>
      <Container>
        <StatsCardContainer>
          <StatsCard name="Total Tasks" value={taskStats.totalTasks} />
          <StatsCard name="Total Days" value={taskStats.totalDays.toFixed(2)} />
          <StatsCard name="Total Hours" value={taskStats.totalHours} />
        </StatsCardContainer>
      </Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <TextInput
            label="Task Title"
            name="title"
            placeholder="Example task 01"
            validations={{
              required: 'Task title is required!',
              maxLength: {
                value: 128,
                message: 'Task name should not exceed 128 characters!',
              },
            }}
            register={register}
            error={errors.title}
          />

          <TextInput
            label="Task Hours"
            name="hours"
            type="number"
            validations={{
              required: 'Task hour is required!',
              valueAsNumber: true,
              max: {
                value: 24,
                message: 'Task should not be longer than 24 Hours!',
              },
            }}
            register={register}
            error={errors.hours}
          />
          <Button $primary type="submit">
            Add
          </Button>
        </Container>
      </form>
      {taskList.length > 0 && (
        <TableContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHead>Task Title</TableHead>
                <TableHead>Time Required (In Hrs)</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </thead>
            <tbody>
              {taskList.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.hours}</TableCell>
                  <TableCell>
                    <ActionButton $danger onClick={onDelete(task.id)}>
                      Delete
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </main>
  );
}
