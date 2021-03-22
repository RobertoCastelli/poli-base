import React, { useContext } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import { Link } from "react-router-dom"
import { FcHome } from "react-icons/fc"
import { DataContext } from "../context"

const Calendar = () => {
	const context = useContext(DataContext)

	return (
		<div className='calendar'>
			<FullCalendar
				defaultView='dayGridMonth'
				plugins={[dayGridPlugin]}
				events={[
					{ title: "TEST1", date: "2021-03-03" },
					{ title: "TEST2", date: "2021-03-03" },
				]}
			/>
			<Link to='/'>
				<button>
					<FcHome size={30} />
				</button>
			</Link>
		</div>
	)
}

export default Calendar
