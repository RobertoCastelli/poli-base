import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const context = useContext(DataContext)
	const { todoList, deleteTodo, toggleCompleted } = context
	return (
		<ol className='ol-todo'>
			{todoList.map((todo, id) => (
				<li
					className='li-todo'
					onClick={() => toggleCompleted(todo.id)}
					key={id}>
					<span className='ticket-todo'>
						<b>{todo.id}</b> - {todo.text}
					</span>
					<span className='delete-todo' onClick={() => deleteTodo(todo.id)}>
						<RiDeleteBinLine size={20} />
					</span>
				</li>
			))}
		</ol>
	)
}

export default TicketList
