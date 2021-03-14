import React, { useContext } from "react"
import { BsFillUnlockFill } from "react-icons/bs"
import { BsLockFill } from "react-icons/bs"
import { FcTodoList } from "react-icons/fc"
import { BiTime } from "react-icons/bi"
import { DataContext } from "../context"

const Counter = () => {
	const {
		oreTotali,
		filterCompleted,
		filterIncomplete,
		showCompletedTickets,
		showIncompleteTickets,
		showAllTickets,
	} = useContext(DataContext)

	return (
		<ul className='ul-count'>
			<li className='li-count-list' onClick={() => showAllTickets()}>
				<div className='li-count-icon'>
					<FcTodoList size={20} />
				</div>
				<div>tot {filterCompleted + filterIncomplete}</div>
			</li>
			<li className='li-count-open' onClick={() => showIncompleteTickets()}>
				<div className='li-count-icon'>
					<BsFillUnlockFill size={20} />
				</div>
				<div>aperti {filterIncomplete}</div>
			</li>
			<li className='li-count-close' onClick={() => showCompletedTickets()}>
				<div className='li-count-icon'>
					<BsLockFill size={20} />
				</div>
				<div>chiusi {filterCompleted}</div>
			</li>
			<li className='li-count-time'>
				<div className='li-count-icon'>
					<BiTime size={20} />
				</div>
				<div>ore {oreTotali}</div>
			</li>
		</ul>
	)
}

export default Counter
