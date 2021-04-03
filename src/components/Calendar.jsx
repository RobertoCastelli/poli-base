import React, { useContext } from "react"
import { Link } from "react-router-dom"
// COMPONENTS
import { CalendarList } from "./CalendarList"
// FULL CALENDAR
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
// REACT ICONS
import { AiOutlineHome } from "react-icons/ai"
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
			<CalendarList />
			<div className='calendar-buttons'>
				<Link to='/'>
					<button className='btn-calendar-home' type='button' name='home'>
						<AiOutlineHome size={30} />
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Calendar
