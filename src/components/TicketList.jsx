import React, { useContext } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { DataContext } from "../context"

const TicketList = () => {
	const { tickets, deleteTicket, openModal } = useContext(DataContext)

	return (
		<ul className='ul-todo'>
			{tickets.map((tk) => {
				return (
					<li className='li-todo' key={tk.id}>
						<div
							onClick={() => openModal(tk.id)}
							className={tk.ore !== 0 ? "completed-todo" : "incomplete-todo"}>
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
