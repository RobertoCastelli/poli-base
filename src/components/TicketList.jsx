import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const context = useContext(DataContext)
	const { todoList, deleteTodo } = context
	return (
		<ol className='ol-todo'>
			{todoList.map((todo) => {
				return (
					<li className='li-todo' key={todo.id}>
						<div className='ticket-todo'>
							<span>{todo.id}</span> - {todo.text}
						</div>
						<div className='delete-todo' onClick={() => deleteTodo(todo.id)}>
							<RiDeleteBinLine size={20} />
						</div>
					</li>
				)
			})}
		</ol>
	)
}

export default TicketList
