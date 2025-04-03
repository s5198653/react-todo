'use client';
import {useState, useEffect, useRef} from 'react';
import {ITodo} from '../../types/data';
import {TodoList} from '../TodoList/TodoList';
import styles from './TodosForm.module.css';

export default function TodosForm() {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (value) {
      setTodos([...todos, {id: Date.now(), title: value, completed: false}]);
      setValue('');
    }
  };

  const removeCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.todos_form}>
      <div className={styles.todos_form__input_wrapper}>
        <input
          className={styles.todos_form__input}
          type="text"
          placeholder="Add a task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button className={styles.todos_form__button} onClick={addTodo}>
          Add
        </button>
      </div>
      <TodoList
        items={todos}
        removeCompletedTodos={removeCompletedTodos}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}
