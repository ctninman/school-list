import Footer from '@/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Grant Stafford-BEST STUDENT EVER!</title>
        <meta name='keywords' content='students'/>
      </Head>
      <div >
        {/* <NavBar /> */}
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Bibbidy bobbedy</p>
        <p className={styles.text}>Sniibbidy Snobbedy</p>
        <Link href='/students/test-student' styles={styles.btn}>See our star student</Link>
        {/* <Footer /> */}
      </div>
    </>
  )
}
