import React, { useContext } from "react"
import icon from "../images/icona.png"
// CONTEXT
import { DataContext } from "../context"

const Title = () => {
	const { togglePanel } = useContext(DataContext)

	return (
		<div className='title'>
			<h2>Politecnico di Milano 1863</h2>
			<div>gestione ticket presidio</div>
			<img className='icon' src={icon} alt='icon' onClick={togglePanel} />
		</div>
	)
}

export default Title
