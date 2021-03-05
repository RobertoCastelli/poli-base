import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const context = useContext(DataContext)
	const { todoList } = context
	return (
		<ol className='ol-todo'>
			{todoList.map((todo, id) => {
				return (
					<li className='li-todo' key={id}>
						<div className='ticket-todo'>
							<span>{todo.id}</span> - {todo.text}
						</div>
						<div className='delete-todo'>
							<RiDeleteBinLine size={20} />
						</div>
					</li>
				)
			})}
		</ol>
	)
}

export default TicketList
