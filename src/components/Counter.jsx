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
				<div className='li-count-tot'>
					<FcTodoList size={20} />
				</div>
				<div>{filterCompleted + filterIncomplete}</div>
			</li>
			<li className='li-count-open' onClick={() => showIncompleteTickets()}>
				<div>
					<BsFillUnlockFill size={20} />
				</div>
				<div>{filterIncomplete}</div>
			</li>
			<li className='li-count-close' onClick={() => showCompletedTickets()}>
				<div>
					<BsLockFill size={20} />
				</div>
				<div>{filterCompleted}</div>
			</li>
			<li className='li-count-time'>
				<div>
					<BiTime size={20} />
				</div>
				<div>{oreTotali}</div>
			</li>
		</ul>
	)
}

export default Counter
