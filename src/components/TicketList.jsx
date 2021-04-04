import React, { useContext } from "react"
// REACT ICONS
import { GrEdit } from "react-icons/gr"
import { RiDeleteBinLine } from "react-icons/ri"
import { GrSettingsOption } from "react-icons/gr"
// CONTEXT
import { DataContext } from "../context"

const TicketList = () => {
	const { tickets, deleteTicket, openModal, togglePanel } = useContext(
		DataContext
	)

	return (
		<>
			<div className='btn-menu' onClick={togglePanel}>
				<GrSettingsOption size={30} />
			</div>
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
								<GrEdit size={20} />
							</div>
							<div className='delete-todo' onClick={() => deleteTicket(tk.id)}>
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
