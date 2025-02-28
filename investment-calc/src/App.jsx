import Form from "./Form";
import Header from "./Header";
import styles from "./App.module.css";
import Output from "./Output";
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Form />
      <Output />
    </div>
  );
}

export default App;
