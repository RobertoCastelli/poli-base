import React, { useContext } from "react"
import { BsFillUnlockFill } from "react-icons/bs"
import { BsLockFill } from "react-icons/bs"
import { FcTodoList } from "react-icons/fc"
import { BiTime } from "react-icons/bi"
import { DataContext } from "../context"

const Counter = () => {
	const context = useContext(DataContext)
	const {
		todoList,
		completed,
		incomplete,
		oreTotali,
		filterOpen,
		filterClose,
		filterTotal,
	} = context

	return (
		<ul className='ul-count'>
			<li className='li-count-list'>
				<div className='li-count-tot' onClick={filterTotal}>
					<FcTodoList size={20} />
				</div>
				<div>{todoList.length}</div>
			</li>
			<li className='li-count-open' onClick={filterOpen}>
				<div>
					<BsFillUnlockFill size={20} />
				</div>
				<div>{incomplete}</div>
			</li>
			<li className='li-count-close' onClick={filterClose}>
				<div>
					<BsLockFill size={20} />
				</div>
				<div>{completed}</div>
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
