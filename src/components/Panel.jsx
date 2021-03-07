import React, { useContext } from "react"
import { DataContext } from "../context"
import { ImDownload } from "react-icons/im"

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
						<ImDownload size={30} />
					</button>
				</form>
			)}
		</>
	)
}

export default Panel
