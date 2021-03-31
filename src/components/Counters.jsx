import React, { useContext } from "react"
import { Link } from "react-router-dom"
// REACT ICONS
import { BsFillUnlockFill } from "react-icons/bs"
import { BsLockFill } from "react-icons/bs"
import { BiTime } from "react-icons/bi"
import { BiCalendar } from "react-icons/bi"
// CONTEXT
import { DataContext } from "../context"

const Counters = () => {
	const {
		oreTotali,
		filterCompleted,
		filterIncomplete,
		showCompletedTickets,
		showIncompleteTickets,
	} = useContext(DataContext)

	return (
		<ul className='ul-count'>
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
			<li>
				<Link to='/calendar'>
					<div className='btn-calendar'>
						<BiCalendar size={20} />
					</div>
				</Link>
			</li>
			<li className='li-count-time'>
				<div>
					<BiTime size={20} />
				</div>
				<div>hours {oreTotali}</div>
			</li>
		</ul>
	)
}

export default Counters
