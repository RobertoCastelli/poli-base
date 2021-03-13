import React, { useContext } from "react"
import { DataContext } from "../context"
import icon from "../images/icona.png"

const Title = () => {
	const context = useContext(DataContext)
	const { togglePanel, data } = context

	return (
		<div onClick={togglePanel} className='title'>
			<h2>Politecnico di Milano 1863</h2>
			<p>gestione ticket presidio</p>
			<img className='icon' src={icon} alt='icon' />
			<h4>{data}</h4>
		</div>
	)
}

export default Title
