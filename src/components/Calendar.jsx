import React, { useContext } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import { Link } from "react-router-dom"
import { FaUniversity } from "react-icons/fa"
import { DataContext } from "../context"

const Calendar = () => {
	const { calendarInputs } = useContext(DataContext)

	return (
		<div className='calendar'>
			<FullCalendar
				// headerToolbar={{ left: "", center: "title", right: "" }}
				plugins={[dayGridPlugin]}
            events={[{title: 'ciao', date: '2021-03-06'}]}
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
