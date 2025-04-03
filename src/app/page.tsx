import styles from './page.module.css';
import TodosForm from './components/TodosForm/TodosForm';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.main__title}>Todos</h1>
        <TodosForm />
      </main>
    </div>
  );
}
