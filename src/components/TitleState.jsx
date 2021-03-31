import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../context"

const TitleState = () => {
	const { filterTitle } = useContext(DataContext)
	return (
		<div className='filter-title'>
			<div>{filterTitle}</div>
		</div>
	)
}

export default TitleState
