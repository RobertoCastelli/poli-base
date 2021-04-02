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
			<li
				className='li-count-open'
				name='open'
				onClick={() => showIncompleteTickets()}>
				<div>
					<BsFillUnlockFill size={20} />
				</div>
				<label htmlFor='open'>open {filterIncomplete}</label>
			</li>
			<li
				className='li-count-close'
				name='close'
				onClick={() => showCompletedTickets()}>
				<div>
					<BsLockFill size={20} />
				</div>
				<label htmlFor='close'>closed {filterCompleted}</label>
			</li>
			<li>
				<Link to='/calendar'>
					<div className='li-count-calendar' name='calendar'>
						<BiCalendar size={20} />
					</div>
					<label htmlFor='calendar'>calendar</label>
				</Link>
			</li>
			<li className='li-count-ore' name='ore'>
				<div>
					<BiTime size={20} />
				</div>
				<label htmlFor='ore'>hours {oreTotali}</label>
			</li>
		</ul>
	)
}

export default Counters
