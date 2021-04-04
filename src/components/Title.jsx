import React from "react"
import icon from "../images/icona.png"

const Title = () => {
	return (
		<div className='title-politecnico'>
			<h2>Politecnico di Milano 1863</h2>
			<div>gestione ticket presidio</div>
			<img className='logo-politecnico' src={icon} alt='icon' />
		</div>
	)
}

export default Title
