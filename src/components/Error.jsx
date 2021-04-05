import React from "react"
import { Link } from "react-router-dom"
// REACT ICONS
import { AiOutlineHome } from "react-icons/ai"

const Error = (props) => {
	return (
		<>
			<div className='error-page-404'>
				<h1>ERROR 404</h1>
				<p>no page foud at ..{props.location.pathname}</p>
			</div>
			<div className='error-buttons-home'>
				<Link to='/'>
					<button className='btn-error-home' type='button' name='home'>
						<AiOutlineHome size={30} />
					</button>
				</Link>
			</div>
		</>
	)
}

export default Error
