import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keyowrds' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iure perferendis in assumenda laudantium iusto. Recusandae at praesentium repudiandae laudantium. Eligendi accusantium atque praesentium inventore iure quas vel corrupti reiciendis?</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iure perferendis in assumenda laudantium iusto. Recusandae at praesentium repudiandae laudantium. Eligendi accusantium atque praesentium inventore iure quas vel corrupti reiciendis?</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
