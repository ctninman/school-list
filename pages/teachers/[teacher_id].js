import Image from 'next/image'

import { createClient } from "contentful"

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'teacher'
	})

	const paths = res.items.map(teacher => {
		return {
			params: { teacher_id: teacher.sys.id}
		}
	})
		
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	
	const { items } = await client.getEntries({
		content_type: 'teacher',
		"sys.id": params.id
	})

	return {
		props: {teacher: items[0]}
	}
}

const details = ({teacher}) => {
	console.log( teacher )
	return (
		<div>
			<Image 
				key={teacher.sys.id}
				src={'https:' + teacher.fields.teacherPhoto.fields.file.url}
				alt={teacher.fields.teacherPhoto.fields.description}
				width={250}
				height={250}/>
			<h1>{teacher.fields.teacherName}</h1>
			<p>{teacher.fields.position}</p>
			<p>Years of Experience: {teacher.fields.yearsExperience}</p>
			<p>{teacher.fields.teacherAbout}</p>
		</div>
	)
}

export default details;