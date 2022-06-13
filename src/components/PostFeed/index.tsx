import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.scss'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';



interface Author {

  avatarURL: string;
  name: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;

}

interface PostFeedProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function PostFeed({ author, content, publishedAt }: PostFeedProps) {

  const [comments, setComments] = useState(['Nice Post'])
  const [newComment, setNewComment] = useState('')

  function handleNewComment(e: FormEvent) {
    e.preventDefault();
    setComments([...comments, newComment])
    setNewComment('')
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('')
    setNewComment(e.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne)
  }

  function handleInvalidSubmit(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Preencha esse campo!')
  }


  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newComment.length == 0;

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

      <form onSubmit={handleNewComment}
        className={styles.commentForm} >
        <p>Lascia il tuo Feedback</p>
        <textarea
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder='Lascia un commento'
          onInvalid={handleInvalidSubmit}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Pubblicare</button>
        </footer>
      </form>

      <div className={styles.commentSection}>
        {comments.map(comment => <Comment key={comment} content={comment} onDeleteComment={deleteComment} />)}
      </div>

    </article>
  )
}