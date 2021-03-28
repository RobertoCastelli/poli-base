import React from "react"
import { FaUniversity } from "react-icons/fa"
import { Link } from "react-router-dom"

const Error = (props) => {
	return (
		<div className='error-page-404'>
			<h1>ERROR 404</h1>
			<p>no page foud at ..{props.location.pathname}</p>
			<Link to='/' style={{ textDecoration: "none" }}>
				<button type='button' name='home' className='btn-home'>
					<FaUniversity size={20} /> home
				</button>
			</Link>
		</div>
	)
}

export default Error
