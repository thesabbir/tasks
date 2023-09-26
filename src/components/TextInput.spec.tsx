import {
  fireEvent,
  getByRole,
  getByText,
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextInput } from './TextInput';
import { act } from 'react-dom/test-utils';
import { Button } from './Button';

describe('Component', () => {
  describe('TextInput', () => {
    test('renders input from correctly', async () => {
      const onSubmit = jest.fn((e) => e.preventDefault());
      const register = jest.fn();

      const InputForm = () => {
        return (
          <>
            <form onSubmit={onSubmit}>
              <TextInput
                label="Test title"
                name="title"
                error={{
                  message: 'error',
                }}
                register={register}
                validations={{
                  required: 'required',
                  maxLength: {
                    value: 10,
                    message: 'max_length_reached',
                  },
                }}
              />
              <Button type="submit">Submit</Button>
            </form>
          </>
        );
      };

      const { container } = render(<InputForm />);
      expect(container).toHaveTextContent('Test title');
      expect(container).toHaveTextContent('error');
      fireEvent(
        getByText(container, 'Submit'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(onSubmit).toBeCalledTimes(1);
    });
  });
});
