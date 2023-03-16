export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	const paths = data.map(student => {
		return {
			params: {id: student.id.toString()}
		}
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

	const data = await res.json()

	return {
		props: {student: data}
	}
}

const details = ({student}) => {
	return (
		<div>
			<h1>{student.name}</h1>
			<p>{student.email}</p>
			<p>{student.website}</p>
			<p>{student.address.city}</p>
		</div>
	)
}

export default details;