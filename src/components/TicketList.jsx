import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const context = useContext(DataContext)
	const { todoList, deleteTodo, toggleCompleted, calendar } = context
	return (
		<ol className='ol-todo'>
			{todoList.map((todo, id) => (
				<li className='li-todo' key={id}>
					<span
						ore='3'
						onClick={() => toggleCompleted(todo.id)}
						className={todo.completed ? "todo-completed" : undefined}>
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
