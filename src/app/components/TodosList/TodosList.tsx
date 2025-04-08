'use client';
import { FC, useState } from 'react';
import { ITodo } from '../../types/data';
import styles from './TodosList.module.css';
import { TodoItem } from '../TodoItem/TodoItem';

interface ITodosListProps {
  items: ITodo[];
  removeCompletedTodos: () => void;
  toggleTodo: (id: number) => void;
}

export const TodosList: FC<ITodosListProps> = (props) => {
  const { items, removeCompletedTodos, toggleTodo } = props;
  const [filter, setFilter] = useState('all');

  const notCompletedCount = items?.filter((todo) => !todo.completed).length;

  const filteredItems = () => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((todo) => !todo.completed);
      case 'completed':
        return items.filter((todo) => todo.completed);
      default:
        return items;
    }
  };

  return (
    <div className={styles.todos_list} data-testid="todosList">
      <h2 className={styles.todos_list__header}>What needs to be done?</h2>
      <ul className={styles.todos_list__list}>
        {filteredItems()?.map((todo) => (
          <li
            className={styles.todos_list__item}
            key={todo.id}
            data-testid="todo-item">
            <TodoItem toggleTodo={toggleTodo} {...todo} />
          </li>
        ))}
      </ul>
      <div className={styles.todos_list__footer}>
        <p className={styles.todos_list__count}>
          {notCompletedCount} items left
        </p>
        <ul className={styles.todos_list__filters}>
          <li>
            <button
              className={`${styles.todos_list__button} ${
                filter === 'all' ? styles.active : ''
              }`}
              type="button"
              onClick={() => setFilter('all')}>
              All
            </button>
          </li>
          <li>
            <button
              className={`${styles.todos_list__button} ${
                filter === 'active' ? styles.active : ''
              }`}
              type="button"
              onClick={() => setFilter('active')}>
              Active
            </button>
          </li>
          <li>
            <button
              className={`${styles.todos_list__button} ${
                filter === 'completed' ? styles.active : ''
              }`}
              type="button"
              onClick={() => setFilter('completed')}>
              Completed
            </button>
          </li>
        </ul>
        <button
          className={styles.todos_list__button}
          onClick={removeCompletedTodos}>
          Clear completed
        </button>
      </div>
    </div>
  );
};
