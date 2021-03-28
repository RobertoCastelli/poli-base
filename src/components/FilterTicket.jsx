import React, { useContext } from "react"
import { DataContext } from "../context"

export const FilterTicket = () => {
	const { filteredCalendarTickets } = useContext(DataContext)
	console.log()
	return (
		<div>
			<p className='filter-ticket'>{filteredCalendarTickets[0]}</p>
		</div>
	)
}
