import { TaskPage } from "pages/tasks/ui/TaskPage";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <TaskPage />
    </div>
  );
}

export default App;
