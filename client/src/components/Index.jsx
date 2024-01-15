import React from "react";
import { Link } from 'react-router-dom'

export default function Index () {
    return (
    <>
        <header>
			<h1>DevCity</h1>

			<nav>
				<Link to='/'>Home</Link>
				<Link to='/login'>Login</Link>
				<Link to='/Register'>Register</Link>
				<Link to='/ConfirmEmail'>ConfirmEmail</Link>
			</nav>
		</header>

        <main>
            <h1>Index</h1>

        </main>
    </>
    )
}