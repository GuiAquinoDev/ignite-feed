import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/julianamq.png',
      name: 'Juliana Martinelli',
      role:'Back-End'
    },

    content: [],
    publishedAt: new Date('2022-05-03'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/guiaquinodev.png',
      name: 'Guilherme Aquino',
      role:'Front-End'
    },

    content: [],
    publishedAt: new Date('2022-05-03'),
  },
]

function App() {
  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <aside>
          <SideBar />
        </aside>
        <main>
          {posts.map(post => {
            return <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  )
}

export default App
