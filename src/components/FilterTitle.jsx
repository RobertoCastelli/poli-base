import React, { useContext } from "react"
import { DataContext } from "../context"

const FilterTitle = () => {
	const { filterTitle } = useContext(DataContext)
	return (
		<div className='filter-title'>
			<div>{filterTitle}</div>
		</div>
	)
}

export default FilterTitle
