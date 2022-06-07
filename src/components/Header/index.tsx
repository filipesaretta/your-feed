import styles from './header.module.scss'

import logoFeed from '../../assets/feed-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoFeed} alt="Logo your feed" />
      <span>Your Feed</span>
    </header>
  )
}