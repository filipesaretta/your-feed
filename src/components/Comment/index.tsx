import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './styles.module.scss'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/filipesaretta.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentProfile}>
              <strong>
                Filipe Saretta
              </strong>
              <time title='09 jun de 2022 às 20:00' dateTime='2022-06-09 20:00'>Cerca de  1h atrás</time>
            </div>
            <button title='Delete Comment'>
              <Trash size={25} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <ThumbsUp size={20} /> Apludir <span>20</span>
        </footer>
      </div>
    </div>
  )
}