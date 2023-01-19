import Meta from './Meta'
import Nav from './Nav'
import Header from './Header'
import styles from '@/styles/Layout.module.css'

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
