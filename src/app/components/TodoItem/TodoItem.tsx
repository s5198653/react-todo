import { FC } from 'react';
import { ITodo } from '../../types/data';
import styles from './TodoItem.module.css';

interface ITodoItemProps extends ITodo {
  toggleTodo: (id: number) => void;
}

export const TodoItem: FC<ITodoItemProps> = (props) => {
  const { id, title, completed, toggleTodo } = props;

  return (
    <div className={styles.checkbox__wrapper} data-testid="todoWrapper">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
        className={styles.checkbox__control}
        id={`todo-${id}`}
      />
      <label htmlFor={`todo-${id}`} className={styles.checkbox__label}>
        <span
          className={`${styles.checkbox__text} ${
            completed ? styles.checkbox__text__completed : ''
          }`}
          data-testid="todoText">
          {title}
        </span>
      </label>
    </div>
  );
};
