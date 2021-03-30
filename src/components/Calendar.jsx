import React, { useContext } from "react"
import { Link } from "react-router-dom"
// COMPONENTS
import { FilterTicket } from "./FilterTicket"
// FULL CALENDAR
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
// REACT ICONS
import { FaUniversity } from "react-icons/fa"
// CONTEXT
import { DataContext } from "../context"

const Calendar = () => {
	const { ticketsToCalendar, handleCalendarTicket, checkClosed } = useContext(
		DataContext
	)

	return (
		<div className='calendar'>
			<FullCalendar
				headerToolbar={{ left: "today", center: "title", right: "prev,next" }}
				weekends={false}
				plugins={[dayGridPlugin, interactionPlugin]}
				events={ticketsToCalendar}
				eventClick={handleCalendarTicket}
				eventDidMount={checkClosed}
			/>
			<FilterTicket />
			<Link to='/' style={{ textDecoration: "none" }}>
				<button type='button' name='home' className='btn-home'>
					<FaUniversity size={20} /> home
				</button>
			</Link>
		</div>
	)
}

export default Calendar
