import React, { useContext } from "react"
import { DataContext } from "../context"

const Panel = () => {
	const context = useContext(DataContext)
	const {
		ticket,
		description,
		setTicket,
		setDescription,
		handleSubmit,
	} = context

	return (
		<>
			<form className='panel' onSubmit={handleSubmit}>
				<input type='date' className='calendar' />
				<input
					type='text'
					className='ticket'
					placeholder='ticket'
					onChange={(e) => setTicket(e.target.value)}
					value={ticket}
				/>
				<input
					type='text'
					className='description'
					placeholder='description'
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				/>
				<button type='submit'>Add</button>
			</form>
		</>
	)
}

export default Panel
