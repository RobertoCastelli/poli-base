import React, { useContext } from "react"
import { BsFillUnlockFill } from "react-icons/bs"
import { BsLockFill } from "react-icons/bs"
import { FcTodoList } from "react-icons/fc"
import { BiTime } from "react-icons/bi"
import { DataContext } from "../context"
import { Link } from "react-router-dom"
import { BiCalendar } from "react-icons/bi"

const Counter = () => {
	const {
		oreTotali,
		filterCompleted,
		filterIncomplete,
		showCompletedTickets,
		showIncompleteTickets,
		showAllTickets,
		handleCalendar,
	} = useContext(DataContext)

	return (
		<ul className='ul-count'>
			<li className='li-count-list' onClick={() => showAllTickets()}>
				<div>
					<FcTodoList size={20} />
				</div>
				<div>totals {filterCompleted + filterIncomplete}</div>
			</li>
			<li className='li-count-open' onClick={() => showIncompleteTickets()}>
				<div>
					<BsFillUnlockFill size={20} />
				</div>
				<div>open {filterIncomplete}</div>
			</li>
			<li className='li-count-close' onClick={() => showCompletedTickets()}>
				<div>
					<BsLockFill size={20} />
				</div>
				<div>closed {filterCompleted}</div>
			</li>
			<li className='li-count-time'>
				<div>
					<BiTime size={20} />
				</div>
				<div>hours {oreTotali}</div>
			</li>
			<li>
				<Link className='link' to='/calendar'>
					<div className='calendar-icon' onClick={() => handleCalendar()}>
						<BiCalendar size={20} />
					</div>
				</Link>
			</li>
		</ul>
	)
}

export default Counter
