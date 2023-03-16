import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

	const router = useRouter();
	const [ timer, setTimer ] = useState(5)
	useEffect (() => {
		const timeout = setTimeout(() => {
			router.push('/')
		}, 5000)
		return () => clearTimeout(timeout)
	}, [router])

	useEffect (() => {
		const timeout = setTimeout(() => {
			setTimer(timer - 1);
		}, 1000)
		return () => clearTimeout(timeout)
	}, [timer])

	return (
		<>
			<Head>
				<title>Student missing!</title>
				<meta name='keywords' content='missing'/>
			</Head>
			<div className='not-found'>
				<h1>Ooooooooohhhh nooooooo!!!!</h1>
				<h2>That page can not be found.</h2>
				<h2>Heading back to the homepage in: {timer}</h2>
				<p>Go back to the <Link href='/'>homepage</Link>.</p>
			</div>
		</>
	)
}

export default NotFound;