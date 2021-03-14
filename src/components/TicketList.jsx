import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const { tickets, deleteTicket, editTicket } = useContext(DataContext)

	return (
		<ul className='ul-todo'>
			{tickets.map((tk) => {
				return (
					<li className='li-todo' key={tk.id}>
						<div
							onClick={() => editTicket(tk.id, tk.completed)}
							className={tk.completed ? "completed-todo" : undefined}>
							<span className='ticket-todo'>{tk.ticket}</span>
						</div>
						<div className='desc-todo'>{tk.description}</div>
						<div className='ore-todo'>
							ore: <span id='ore'>{tk.ore}</span>
						</div>
						<div className='delete-todo' onClick={() => deleteTicket(tk.id)}>
							<RiDeleteBinLine size={20} />
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default TicketList
