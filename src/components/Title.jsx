import React, { useContext } from "react"
import { DataContext } from "../context"
import icon from "../images/icona.png"

const Title = () => {
	const context = useContext(DataContext)
	const { toggleVisible, data } = context

	return (
		<div onClick={toggleVisible} className='title'>
			<h2>Politecnico di Milano</h2>
			<img className='icon' src={icon} alt='icon' />
			<p className='calendar'>
				<small>gestione ticket presidio</small>
			</p>
			<b>{data}</b>
		</div>
	)
}

export default Title
