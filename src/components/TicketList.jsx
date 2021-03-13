import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const context = useContext(DataContext)
	const { tickets } = context
	return (
		<ul className='ul-todo'>
			{tickets.map((tk) => {
				return (
					<li className='li-todo' key={tk.id}>
						<div
							// onClick={() => toggleCompleted(tk.ticket)}
							className={tk.completed ? "completed-todo" : undefined}>
							<span className='ticket-todo'>{tk.ticket}</span>
						</div>
						<div className='desc-todo'>{tk.description}</div>
						<div className='ore-todo'>
							ore: <span id='ore'>{tk.ore}</span>
						</div>
						<div className='delete-todo'>
							<RiDeleteBinLine size={20} />
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default TicketList
