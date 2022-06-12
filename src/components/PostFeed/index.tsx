import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.scss'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function PostFeed({ author, content, publishedAt }) {

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  function handleNewComment(e) {
    e.preventDefault();
    setComments([...comments, newComment])
    setNewComment('')
  }

  function handleNewCommentChange(e) {
    setNewComment(e.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne)
  }


  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header className={styles.profile}>
        <div className={styles.author}>
          <Avatar src={author.avatarURL} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedAtRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="#">{item.content}</a></p>

          }
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <p>Lascia il tuo Feedback</p>
        <textarea
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder='Lascia un commento' />
        <footer>
          <button type='submit'>Pubblicare</button>
        </footer>
      </form>

      <div className={styles.commentSection}>
        {comments.map(comment => <Comment key={comment} content={comment} onDeleteComment={deleteComment} />)}
      </div>

    </article>
  )
}