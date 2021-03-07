import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const context = useContext(DataContext)
	const { todoList, deleteTodo, toggleCompleted } = context
	return (
		<ol className='ol-todo'>
			{todoList.map((todo, id) => (
				<li className='li-todo' key={id}>
					<span
						onClick={() => toggleCompleted(todo.id)}
						className={todo.completed ? "completed-todo" : undefined}>
						<span className='ticket-todo'>{todo.id}</span>
					</span>
					<span className='desc-todo'>{todo.text}</span>
					<span className='ore-todo'>ore: {todo.ore}</span>
					<span className='delete-todo' onClick={() => deleteTodo(todo.id)}>
						<RiDeleteBinLine size={20} />
					</span>
				</li>
			))}
		</ol>
	)
}

export default TicketList
