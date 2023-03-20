import styles from '../../styles/Teachers.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'contentful'

export const getStaticProps = async () => {
  
	const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

	const res3 = await client.getEntries({
    content_type: 'teacher'
  });

	return {
		props: {
			teachers: res3.items
		}
	}

}


const Students = ({ teachers }) => {
	return (
		<div>
			<h1>Teacher List</h1>
			{teachers.map(teacher => (
				<Link 
					href={'/teachers/' + teacher.sys.id} 
					key={teacher.sys.id}
					className={styles.single}>
						<Image 
							key={teacher.sys.id}
							src={'https:' + teacher.fields.teacherPhoto.fields.file.url}
							alt={teacher.fields.teacherPhoto.fields.description}
							width={150}
							height={150}/>
						<div className='teacher-desc'>
							<h3>{teacher.fields.teacherName}</h3>
							<h2>{teacher.fields.position}</h2>
						</div>
				</Link>
			))}

		</div>
	)
}

export default Students;