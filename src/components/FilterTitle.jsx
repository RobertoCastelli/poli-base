import React, { useContext } from "react"
import { DataContext } from "../context"

const FilterTitle = () => {
	const { filterTitle, timeNow } = useContext(DataContext)
	return (
		<div className='filter-title'>
			<div>{filterTitle}</div>
			<small>{timeNow}</small>
		</div>
	)
}

export default FilterTitle
