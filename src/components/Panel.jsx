import React, { useContext } from "react"
// REACT ICONS
// import { ImDownload } from "react-icons/im"
// CONTEXT
import { DataContext } from "../context"

const Panel = () => {
	const {
		ticket,
		description,
		setTicket,
		setDescription,
		date,
		setDate,
		handleSubmit,
		isHidden,
	} = useContext(DataContext)

	return (
		<>
			{!isHidden && (
				<form className='admin-panel' onSubmit={handleSubmit}>
					<input
						type='text'
						className='ticket-panel'
						placeholder='ticket'
						maxLength='10'
						onChange={(e) => setTicket(e.target.value)}
						value={ticket}
						required
					/>
					<input
						type='text'
						className='description-panel'
						placeholder='description'
						maxLength='28'
						onChange={(e) => setDescription(e.target.value)}
						value={description}
						required
					/>
					<input
						type='date'
						className='datapicker-panel'
						onChange={(e) => setDate(e.target.value)}
						value={date}
						required
					/>
					<button className='btn-panel' type='submit'>
						add ticket
						{/* <ImDownload size={20} /> */}
					</button>
				</form>
			)}
		</>
	)
}

export default Panel
