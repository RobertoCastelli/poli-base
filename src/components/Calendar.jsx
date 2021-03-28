import React, { useContext } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { Link } from "react-router-dom"
import { FaUniversity } from "react-icons/fa"
import { DataContext } from "../context"
import { FilterTicket } from "./FilterTicket"

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
