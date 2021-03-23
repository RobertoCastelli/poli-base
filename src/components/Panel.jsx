import React, { useContext } from "react"
import { DataContext } from "../context"
import { ImDownload } from "react-icons/im"

const Panel = () => {
	const {
		ticket,
		description,
		setTicket,
		setDescription,
		handleSubmit,
		isHidden,
	} = useContext(DataContext)

	return (
		<>
			{!isHidden && (
				<form className='panel' onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='ticket'
						maxLength='10'
						onChange={(e) => setTicket(e.target.value)}
						value={ticket}
						required
					/>
					<input
						type='text'
						placeholder='description'
						maxLength='28'
						onChange={(e) => setDescription(e.target.value)}
						value={description}
						required
					/>
					<input className='datepicker' type='date' required />
					<button type='submit'>
						<ImDownload size={30} />
					</button>
				</form>
			)}
		</>
	)
}

export default Panel
