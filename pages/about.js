import Image from 'next/image'
import { createClient } from 'contentful'

export const getStaticProps = async () => {

	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY
	})

	const res = await client.getEntries({
		content_type: 'school'
	})

	return ({
		props: {
			schoolPhotos: res.items
		}
	})

}

const About = ({ schoolPhotos }) => {
	return (
		<div>
			{schoolPhotos.map(schoolPhoto => (

				<Image 
				key={schoolPhoto.sys.id}
				src={'https:' + schoolPhoto.fields.schoolImage.fields.file.url}
				alt={schoolPhoto.fields.schoolImage.fields.description}
				width={150}
				height={150}/>
				))}
			<h1>Bikini Bottom Elementary</h1>
			<p>Nestled deep in the woods of the Atlantic Ocean, Bikini Bottom is a diverse community. With a wide variety of leg and arm counts, this school welcomes all learners.</p>
			<p>If you are unable to breathe underwater, talk to Sandy Cheeks to see how Bikini Bottom Elementary has helped her survive and thrive.</p>
		</div>
	)
}

export default About;