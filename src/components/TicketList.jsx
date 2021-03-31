import React, { useContext } from "react"
// REACT ICONS
import { RiDeleteBinLine } from "react-icons/ri"
import { BiTime } from "react-icons/bi"
// CONTEXT
import { DataContext } from "../context"

const TicketList = () => {
	const { tickets, deleteTicket, openModal } = useContext(DataContext)

	return (
		<ul className='ul-todo'>
			{tickets.map((tk) => {
				return (
					<li className='li-todo' key={tk.id}>
						<div
							className={tk.ore !== 0 ? "completed-todo" : "incomplete-todo"}>
							<span className='ticket-todo'>{tk.ticket}</span>
						</div>
						<div className='desc-todo'>{tk.description}</div>
						<div className='date-todo'>{tk.date}</div>
						<div className='ore-todo'>
							<span id='ore'>{tk.ore} ore</span>
						</div>
						<div className='edit-todo' onClick={() => openModal(tk.id)}>
							<BiTime size={20} />
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
