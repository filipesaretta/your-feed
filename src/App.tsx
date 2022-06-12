import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { PostFeed } from './components/PostFeed';

import styles from './App.module.scss';


const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/filipesaretta.png',
      name: 'Filipe Saretta',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir um novo projeto!' },
      { type: 'link', content: 'jane.design/doctorcar' },
    ],
    publishedAt: new Date('2022-06-10 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/filipesaretta.png',
      name: 'Filipe Saretta',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir um novo projeto!' },
      { type: 'link', content: 'jane.design/doctorcar' },
    ],
    publishedAt: new Date('2022-06-10 21:00:00')
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>
            <PostFeed key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
          )}
        </main>
      </div>
    </>
  )
}

export default App
