import React from "react"
import { FcHome } from "react-icons/fc"
import { Link } from "react-router-dom"

const Error = (props) => {
	console.log(props)
	return (
		<div className='error-page-404'>
			<h1>PAGE ERROR 404</h1>
			<p>no page foud at ...{props.location.pathname}</p>
			<Link to='/'>
				<button>
					<FcHome size={30} />
				</button>
			</Link>
		</div>
	)
}

export default Error
