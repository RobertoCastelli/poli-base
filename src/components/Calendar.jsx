import React, { useContext } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"

import { Link } from "react-router-dom"
import { FaUniversity } from "react-icons/fa"
import { DataContext } from "../context"

const Calendar = () => {
	const { ticketsToCalendar, handleCalendarTicket } = useContext(DataContext)

	return (
		<div className='calendar'>
			<FullCalendar
				headerToolbar={{ left: "today", center: "title", right: "prev,next" }}
				weekends={false}
				plugins={[dayGridPlugin, interactionPlugin]}
				events={ticketsToCalendar}
				eventClick={handleCalendarTicket}
			/>
			<Link to='/'>
				<button className='home-icon'>
					<FaUniversity size={20} />
				</button>
			</Link>
		</div>
	)
}

export default Calendar
