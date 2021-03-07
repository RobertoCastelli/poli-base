import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const context = useContext(DataContext)
	const { todoList, deleteTodo, toggleCompleted, ore } = context
	return (
		<ol className='ol-todo'>
			{todoList.map((todo, id) => (
				<li className='li-todo' key={id}>
					<span
						onClick={() => toggleCompleted(todo.id)}
						className={todo.completed ? "todo-completed" : undefined}>
						<b>{todo.id}</b> {ore} - {todo.text}
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
