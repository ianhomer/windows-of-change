import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Windows of Change</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Title
        </h1>

        <p>
          Get started
        </p>


        <footer>
           Footer
        </footer>
      </main>
    </div>
  )
}
