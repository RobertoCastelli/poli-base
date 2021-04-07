import React from "react"
import icon from "../images/icona.png"

const Title = () => {
	return (
		<div className='title-politecnico'>
			<h2>Politecnico di Milano 1863</h2>
			<p className='sub-title-politecnico'>gestione ticket presidio</p>
			<img className='logo-politecnico' src={icon} alt='icon' />
			<ul className='access-politecnico'>
				<li>sign in</li>
				<li>sign out</li>
			</ul>
		</div>
	)
}

export default Title
