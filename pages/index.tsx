import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/layouts/appLayout';

export default function Home() {
  return (
    <>
      <AppLayout>
        <div className={styles.container}>
          <Head>
            <title>Ship | Online ship ticketing</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="cotainer">
            <h1>Home index</h1>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
