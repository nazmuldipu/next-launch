import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/layouts/appLayout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ship | Online ship ticketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>

        <div className="cotainer">
          <h1>Home index</h1>
        </div>
      </div>
    </>
  )
}

Home.getLayout = page => (
  <AppLayout>
    {page}
  </AppLayout>
)
export default Home;
