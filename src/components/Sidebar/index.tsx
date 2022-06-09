import styles from './sidebar.module.scss';
import { PencilLine } from "phosphor-react";


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1445560302902-faf947ee9413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <img src="https://github.com/filipesaretta.png" />
        <strong>Filipe Saretta</strong>
        <span>Front-end Developer</span>
      </div>

      <footer className={styles.footer}>

        <a href="#"><PencilLine size={20} />Edit Profile</a>
      </footer>
    </aside>
  )
}