import styles from '../../styles/Students.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'contentful'

export const getStaticProps = async () => {
  
	const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

	const res2 = await client.getEntries({
    content_type: 'student'
  });

	return {
		props: {
			students: res2.items
		}
	}

}


const Students = ({ students }) => {
	return (
		<div>
			<h1>Student List</h1>
			{students.map(student => (
				<Link 
					href={'/students/' + student.sys.id} 
					key={student.sys.id}
					className={styles.single}>
						<Image 
							key={student.sys.id}
							src={'https:' + student.fields.studentPhoto.fields.file.url}
							alt={student.fields.studentPhoto.fields.description}
							width={150}
							height={150}/>
						<div className='student-desc'>
							<h3>{student.fields.studentName}</h3>
							<h2>{student.fields.gradeLevel} Grade</h2>
						</div>
				</Link>
			))}

		</div>
	)
}

export default Students;