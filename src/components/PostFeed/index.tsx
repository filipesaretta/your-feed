import { Comment } from '../Comment'
import styles from './styles.module.scss'

export function PostFeed() {
  return (
    <article className={styles.post}>
      <header className={styles.profile}>
        <div className={styles.author}>
          <img src="https://github.com/filipesaretta.png" />
          <div>
            <strong>Filipe Saretta</strong>
            <span>Front-end Developer</span>
          </div>
        </div>
        <time title='09 jun de 2022 às 19:00' dateTime='2022-06-09 19:00'>Públicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da
          Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
        <a href=''> 👉 jane.design/doctorcare</a>

        <span>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </span>
      </div>

      <form className={styles.commentForm}>
        <p>Lascia il tuo Feedback</p>
        <textarea placeholder='Lascia un commento' />
        <footer>
          <button type='submit'>Pubblicare</button>
        </footer>
      </form>

      <div className={styles.commentSection}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}