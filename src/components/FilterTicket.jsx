import React, { useContext } from "react"
import { DataContext } from "../context"

export const FilterTicket = () => {
	const {
		calendarTicket: { ticket, description, ore, date },
	} = useContext(DataContext)

	return (
		<>
			{ticket && (
				<div className='filtered-calendar-tickets'>
					<div className='filtered-calendar-ticket'>{ticket}</div>
					<div className='filtered-calendar-date'>{date}</div>
					<div className='filtered-calendar-ore'>{ore} ore</div>
					<div className='filtered-calendar-description'>{description}</div>
					<div
						className={`filtered-calendar-state  ${
							ore === 0 ? "" : "filtered-calendar-state-complete"
						}`}>
						{ore !== 0 ? `complete` : `open`}
					</div>
					<div
						className='filtered-calendar-edit'
						onClick={() =>
							alert("Work in progress: Funzionalità ancora non attiva (NdR)")
						}>
						edit
					</div>
				</div>
			)}
		</>
	)
}
