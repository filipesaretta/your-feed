import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h3>Main</h3>
        </main>
      </div>
    </>
  )
}

export default App
