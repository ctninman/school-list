import Footer from '@/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '@/styles/Home.module.css'
import { createClient } from 'contentful'

export async function getStaticProps () {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: 'school'
  });

  const res2 = await client.getEntries({
    content_type: 'student'
  });

  return {
    props: {
      schoolPhotos: res.items,
      students: res2.items
    }
  }

}

export default function Home({ schoolPhotos, students }) {

  const schoolImages = ["image1", 'image2', 'image3', 'image4']

  console.log(schoolPhotos, students)

  return (
    <>
      <Head>
        <title>Bikini Bottom Elementary</title>
        <meta name='keywords' content='students'/>
      </Head>
     
      <div >
        <h1 className={styles.title}>Bikini Bottom Elementary</h1>
        
          {schoolPhotos.map((image) => (
            <div className='school-photo' key={image.sys.id}>
              <Image 
                key={image.sys.id}
                src={'https:' + image.fields.schoolImage.fields.file.url}
                alt={image.fields.schoolImage.fields.description}
                width={350}
                height={250}/>
            </div>
          ))}
        <Link href='/students/test-student' styles={styles.btn}>See our star student</Link> 
      </div>
    </>
  )
}
