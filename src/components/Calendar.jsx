import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import { Link } from "react-router-dom"
import { FcHome } from "react-icons/fc"

const Calendar = () => {
	return (
		<div className='calendar'>
			<FullCalendar defaultView='dayGridMonth' plugins={[dayGridPlugin]} />
			<Link to='/'>
				<button>
					<FcHome size={30} />
				</button>
			</Link>
		</div>
	)
}

export default Calendar
