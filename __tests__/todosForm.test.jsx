import '@testing-library/jest-dom';
import {
  render,
  screen,
  getByTestId,
  getByText,
  getByRole,
} from '@testing-library/react';
import user from '@testing-library/user-event';
import TodosForm from '../src/app/components/TodosForm/TodosForm';
import { TodosList } from '../src/app/components/TodosList/TodosList';

describe('TodosForm', () => {
  it('renders a textbox and button', () => {
    render(<TodosForm />);

    const addsTodoButtonWrapper = screen.getByTestId('addsButtonWrapper');
    const addsTodoButton = getByTestId(addsTodoButtonWrapper, 'addsButton');

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(addsTodoButton).toBeDisabled();
  });

  it('renders todos list', () => {
    render(<TodosList />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('adds todo item', async () => {
    render(<TodosForm />);
    const inputElement = screen.getByRole('textbox');
    const addsTodoButton = screen.getByTestId('addsButton');
    const todosList = screen.getByTestId('todosList');

    await user.type(inputElement, 'Покрытие тестами');
    await user.click(addsTodoButton);

    expect(inputElement).toHaveValue('');
    expect(getByText(todosList, 'Покрытие тестами')).toBeInTheDocument();
  });

  it('clear completed todo items', async () => {
    render(<TodosForm />);
    const inputElement = screen.getByRole('textbox');
    const addsTodoButton = screen.getByTestId('addsButton');

    await user.type(inputElement, 'Тестовое задание');
    await user.click(addsTodoButton);
    await user.type(inputElement, 'Покрытие тестами');
    await user.click(addsTodoButton);
    await user.type(inputElement, 'Прекрасный код');
    await user.click(addsTodoButton);

    const todoItems = screen.queryAllByTestId('todo-item');
    await user.click(getByRole(todoItems[0], 'checkbox'));
    await user.click(getByRole(todoItems[1], 'checkbox'));

    const deleteButton = screen.getByRole('button', {
      name: 'Clear completed',
    });
    await user.click(deleteButton);

    const notCompletedTodoItems = screen
      .queryAllByTestId('todo-item')
      .filter((item) => !item.querySelector('input[type="checkbox"]').checked);
    const completedTodoItems = screen
      .queryAllByTestId('todo-item')
      .filter((item) => item.querySelector('input[type="checkbox"]').checked);

    expect(completedTodoItems).toHaveLength(0);
    expect(notCompletedTodoItems).toHaveLength(1);
  });

  it('applies completed task styles', async () => {
    render(<TodosForm />);
    const inputElement = screen.getByRole('textbox');
    const addsTodoButton = screen.getByTestId('addsButton');
    const todosList = screen.getByTestId('todosList');

    await user.type(inputElement, 'Тестовое задание');
    await user.click(addsTodoButton);

    const todoWrapper = getByTestId(todosList, 'todoWrapper');
    const todoElement = getByRole(todoWrapper, 'checkbox');
    const textElement = getByTestId(todoWrapper, 'todoText');

    await user.click(todoElement);

    expect(todoElement).toBeChecked();
    expect(textElement).toHaveClass('checkbox__text__completed');
  });

  it('filters todo items', async () => {
    render(<TodosForm />);
    const inputElement = screen.getByRole('textbox');
    const addsTodoButton = screen.getByTestId('addsButton');

    await user.type(inputElement, 'Тестовое задание');
    await user.click(addsTodoButton);
    await user.type(inputElement, 'Покрытие тестами');
    await user.click(addsTodoButton);
    await user.type(inputElement, 'Прекрасный код');
    await user.click(addsTodoButton);

    const todoItems = screen.queryAllByTestId('todo-item');
    const filterButtonAll = screen.getByRole('button', {
      name: 'All',
    });
    const filterButtonActive = screen.getByRole('button', {
      name: 'Active',
    });
    const filterButtonCompleted = screen.getByRole('button', {
      name: 'Completed',
    });
    await user.click(getByRole(todoItems[0], 'checkbox'));
    await user.click(getByRole(todoItems[1], 'checkbox'));

    await user.click(filterButtonCompleted);
    expect(screen.queryAllByTestId('todo-item')).toHaveLength(2);

    await user.click(filterButtonActive);
    expect(screen.queryAllByTestId('todo-item')).toHaveLength(1);

    await user.click(filterButtonAll);
    expect(screen.queryAllByTestId('todo-item')).toHaveLength(3);
  });
});
