import React, { useContext } from "react"
import icon from "../images/icona.png"
// REACT ICONS
import { GiBigGear } from "react-icons/gi"
// CONTEXT
import { DataContext } from "../context"

const Title = () => {
	const { togglePanel } = useContext(DataContext)

	return (
		<div className='title-politecnico'>
			<h2>Politecnico di Milano 1863</h2>
			<div>gestione ticket presidio</div>
			<img className='logo-politecnico' src={icon} alt='icon' />
			<div className='btn-menu' onClick={togglePanel}>
				<GiBigGear size={30} />
			</div>
		</div>
	)
}

export default Title
