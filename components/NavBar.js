import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
	return (
		<nav>
			<div className='logo'>
				<Image src='/BikiniBSign.jpeg' alt='Grant' width={156} height={128}/>
				{/* <h1>Student List</h1> */}
			</div>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
			<Link href='/students'>Student List</Link>
			<Link href='/teachers'>Teacher List</Link>
		</nav>
	)
}

export default NavBar