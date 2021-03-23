import React, { useContext } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import { Link } from "react-router-dom"
import { FaUniversity } from "react-icons/fa"
import { DataContext } from "../context"

const Calendar = () => {
	const { calendarEntries } = useContext(DataContext)

	return (
		<div>
			<FullCalendar
				defaultView='dayGridMonth'
				plugins={[dayGridPlugin]}
				events={calendarEntries}
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
