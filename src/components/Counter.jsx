import React, { useContext } from "react"
import { BsFillUnlockFill } from "react-icons/bs"
import { BsLockFill } from "react-icons/bs"
import { FcTodoList } from "react-icons/fc"
import { DataContext } from "../context"

const Counter = () => {
	const context = useContext(DataContext)
	const { todoList } = context

	return (
		<ul className='todo-count'>
			<li>
				<div className='list-icon'>
					<FcTodoList size={20} />
				</div>
				<span>{todoList.length}</span>
			</li>
			<li>
				<div className='lock-open'>
					<BsFillUnlockFill size={20} />
				</div>
				<span>{todoList.length}</span>
			</li>
			<li>
				<div className='lock-close'>
					<BsLockFill size={20} />
				</div>
				<span>{todoList.length}</span>
			</li>
		</ul>
	)
}

export default Counter
