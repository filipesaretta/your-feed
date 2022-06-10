import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { PostFeed } from './components/PostFeed';

import styles from './App.module.scss';


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <PostFeed />
          <PostFeed />
        </main>
      </div>
    </>
  )
}

export default App
