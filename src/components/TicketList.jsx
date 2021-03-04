import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const context = useContext(DataContext)
	const { todoList } = context
	return (
		<>
			<ul>
				{todoList.map((todo, id) => {
					return (
						<li className='li-todo' key={id}>
							<div>
								<input type='checkbox' name={id} id={id} />
								<input type='number' id={id} />
								{todo.id} - {todo.text}
							</div>

							<div className='delete-todo'>
								<RiDeleteBinLine size={20} />
							</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default TicketList
