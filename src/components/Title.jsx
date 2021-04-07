import React, { useContext } from "react"
import icon from "../images/icona.png"
// CONTEXT
import { DataContext } from "../context"

const Title = () => {
	const { messagePanel } = useContext(DataContext)
	return (
		<div className='title-politecnico'>
			<h2>Politecnico di Milano 1863</h2>
			<p className='sub-title-politecnico'>gestione ticket presidio</p>
			<img className='logo-politecnico' src={icon} alt='icon' />
			<div className='user-politecnico'>
				<p>{messagePanel}</p>
			</div>
		</div>
	)
}

export default Title
