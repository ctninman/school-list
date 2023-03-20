import Image from 'next/image'

import { createClient } from "contentful"

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'student'
	})

	const paths = res.items.map(student => {
		return {
			params: { id: student.sys.id}
		}
	})
		
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	
	const { items } = await client.getEntries({
		content_type: 'student',
		"sys.id": params.id
	})

	return {
		props: {student: items[0]}
	}
}

const details = ({student}) => {
	console.log( student )
	return (
		<div>
			<Image 
				key={student.sys.id}
				src={'https:' + student.fields.studentPhoto.fields.file.url}
				alt={student.fields.studentPhoto.fields.description}
				width={250}
				height={250}/>
			<h1>{student.fields.studentName}</h1>
			<p>{student.fields.nickname}</p>
			<p>{student.fields.gradeLevel} Grade</p>
		</div>
	)
}

export default details;