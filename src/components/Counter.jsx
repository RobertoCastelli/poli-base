import React, { useContext } from "react"
import { BsFillUnlockFill } from "react-icons/bs"
import { BsLockFill } from "react-icons/bs"
import { FcTodoList } from "react-icons/fc"
import { BiTime } from "react-icons/bi"
import { DataContext } from "../context"

const Counter = () => {
	const context = useContext(DataContext)

	return (
		<ul className='ul-count'>
			<li className='li-count-list'>
				<div className='li-count-tot'>
					<FcTodoList size={20} />
				</div>
				<div>0</div>
			</li>
			<li className='li-count-open'>
				<div>
					<BsFillUnlockFill size={20} />
				</div>
				<div>0</div>
			</li>
			<li className='li-count-close'>
				<div>
					<BsLockFill size={20} />
				</div>
				<div>0</div>
			</li>
			<li className='li-count-time'>
				<div>
					<BiTime size={20} />
				</div>
				<div>0</div>
			</li>
		</ul>
	)
}

export default Counter
