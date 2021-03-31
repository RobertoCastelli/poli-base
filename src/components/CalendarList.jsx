import React, { useContext } from "react"
// REACT ICONS
import { BiTime } from "react-icons/bi"
// CONTEXT
import { DataContext } from "../context"

export const CalendarList = () => {
	const {
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
						onClick={
							// () => {
							// 	openModal("thwy4BDPsSdx2lP638be")
							// 	console.log(index)
							// }
							() =>
								alert("Work in progress: Funzionalità ancora non attiva (NdR)")
						}>
						<BiTime size={20} />
					</div>
				</div>
			)}
		</>
	)
}
