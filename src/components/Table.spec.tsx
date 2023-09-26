import { fireEvent, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table, TableHead, TableRow, TableCell, TableContainer } from './Table';
import { ActionButton } from '@/components/Button';

describe('Component', () => {
  describe('Table', () => {
    test('renders correctly', async () => {
      const taskList = [
        {
          id: `12-23-45`,
          title: 'Test',
          hours: 10,
        },
      ];
      const handleDelete = jest.fn();
      const onDelete = (taskId: string) => handleDelete(taskId);
      const TableView = () =>
        taskList.length > 0 && (
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
        );
      const { container } = render(<TableView data-test-id="table-view" />);
      expect(container).toHaveTextContent('Test');
      expect(container).toHaveTextContent('10');
      fireEvent(
        getByText(container, 'Delete'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(handleDelete).toHaveBeenCalledTimes(1);
      expect(handleDelete).toBeCalledWith('12-23-45');
    });
  });
});
