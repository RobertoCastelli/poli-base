import React, { useContext } from "react"
import { DataContext } from "../context"
import { GiPlainArrow } from "react-icons/gi"

const Panel = () => {
	const context = useContext(DataContext)
	const {
		ticket,
		description,
		setTicket,
		setDescription,
		handleSubmit,
		isHidden,
	} = context

	return (
		<>
			{!isHidden && (
				<form onSubmit={handleSubmit}>
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
					<button type='submit'>
						<h1>
							<GiPlainArrow />
						</h1>
					</button>
				</form>
			)}
		</>
	)
}

export default Panel
