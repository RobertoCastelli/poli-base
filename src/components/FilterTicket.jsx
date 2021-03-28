import React, { useContext } from "react"
import { DataContext } from "../context"

export const FilterTicket = () => {
	const {
		calendarTicket: { ticket, description, ore, date },
	} = useContext(DataContext)
	return (
		<div className='filter-ticket'>
			<div>{ticket}</div>
			<div>{description}</div>
			<div>{ore}</div>
			<div>{date}</div>
		</div>
	)
}
