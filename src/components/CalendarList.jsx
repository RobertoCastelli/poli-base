import React, { useContext } from "react"
// REACT ICONS
import { GrEdit } from "react-icons/gr"
import { RiDeleteBinLine } from "react-icons/ri"
// CONTEXT
import { DataContext } from "../context"

const CalendarList = () => {
	const {
		updateCalendarTicketOre,
		deleteCalendarTicket,
		calendarTicket: { ticket, description, ore, date },
	} = useContext(DataContext)

	return (
		<>
			{ticket && (
				<div className='filtered-calendar-tickets'>
					<div className={"filtered-calendar-ticket"}>{ticket}</div>
					<div className='filtered-calendar-date'>{date}</div>
					<div className='filtered-calendar-description'>{description}</div>
					<div className='filtered-calendar-ore'>{ore} ore</div>
					<button
						className='btn-calendar-edit'
						type='button'
						onClick={() => updateCalendarTicketOre(ticket)}>
						<GrEdit size={20} />
					</button>
					<div
						className='delete-todo'
						onClick={() => deleteCalendarTicket(ticket)}>
						<RiDeleteBinLine size={20} />
					</div>
				</div>
			)}
		</>
	)
}

export default CalendarList
