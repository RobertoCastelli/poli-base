import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../context"

const FilterTitle = () => {
	const { filterTitle, dateAndTimeNow } = useContext(DataContext)
	return (
		<div className='filter-title'>
			<div>{filterTitle}</div>
			<Link className='link' to='/calendar'>
				<p>{dateAndTimeNow}</p>
			</Link>
		</div>
	)
}

export default FilterTitle
