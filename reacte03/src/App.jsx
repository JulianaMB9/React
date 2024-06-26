
import './global.css'
import styles from './components/App.modules.css'
import { Header } from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Posts } from './components/Posts.jsx'
import { Comments } from './components/Comments.jsx'


function App() {
  return (

    <div>
      <Header />
      <div className={styles.wrapper}>

        <Sidebar />


        <main>
          <Posts
          />
          <Posts
          />

          <Comments />
          <Comments />
          <Comments />

        </main>
      </div>
    </div>

  )
}

export default App
