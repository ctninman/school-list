import Image from 'next/image'

const TestStudent = () => {
	return (
		<div>
			<h1>Our best Student of all time!</h1>
			<Image 
				src='/GrantStaffordPic.jpeg' 
				alt='top dog'
				width={150}
				height={150}/>
			<h1>Grant Stafford</h1>
		</div>
	)
}

export default TestStudent;