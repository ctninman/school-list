import styles from '../../styles/Students.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json()
	console.log(data)

	return {
		props: {
			students: data
		}
	}

}


const Students = ({ students }) => {
	return (
		<div>
			<h1>Student List</h1>
			{students.map(student => (
				<Link 
					href={'/students/' + student.id} 
					key={student.id}
					className={styles.single}>
						<h3>{student.name}</h3>
				</Link>
			))}

		</div>
	)
}

export default Students;