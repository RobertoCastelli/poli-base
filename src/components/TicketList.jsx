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
					<div
						onClick={() => toggleCompleted(todo.id)}
						className={todo.completed ? "completed-todo" : undefined}>
						<span className='ticket-todo'>{todo.id}</span>
					</div>
					<div className='desc-todo'>{todo.text}</div>
					<div className='ore-todo'>
						ore: <span id='ore'>{todo.ore}</span>
					</div>
					<div className='delete-todo' onClick={() => deleteTodo(todo.id)}>
						<RiDeleteBinLine size={20} />
					</div>
				</li>
			))}
		</ol>
	)
}

export default TicketList
