import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../context"

const TitleState = () => {
	const { filterTitle } = useContext(DataContext)
	return (
		<div className='title-ticket-state'>
			<h3>{filterTitle}</h3>
		</div>
	)
}

export default TitleState
