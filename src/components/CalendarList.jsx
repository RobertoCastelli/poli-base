import React, { useContext } from "react"
// REACT ICONS
import { FcServices } from "react-icons/fc"
// CONTEXT
import { DataContext } from "../context"

export const CalendarList = () => {
	const {
		updateCalendarTicketOre,
		calendarTicket: { ticket, description, ore, date },
	} = useContext(DataContext)

	return (
		<>
			{ticket && (
				<div className='filtered-calendar-tickets'>
					<div
						className={`filtered-calendar-ticket ${
							ore === 0 ? "" : "filtered-calendar-state-complete"
						}`}>
						{ticket}
					</div>
					<div className='filtered-calendar-date'>{date}</div>
					<div className='filtered-calendar-ore'>{ore} ore</div>
					<div className='filtered-calendar-description'>{description}</div>
					<div
						className='filtered-calendar-edit'
						onClick={() => updateCalendarTicketOre(ticket)}>
						<FcServices size={20} />
					</div>
				</div>
			)}
		</>
	)
}
