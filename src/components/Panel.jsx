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
		sndAdd,
	} = context

	return (
		<>
			{!isHidden && (
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						className='ticket'
						placeholder='ticket'
						maxLength='10'
						onChange={(e) => setTicket(e.target.value)}
						value={ticket}
						required
					/>
					<input
						type='text'
						className='description'
						placeholder='description'
						maxLength='28'
						onChange={(e) => setDescription(e.target.value)}
						value={description}
						required
					/>
					<button type='submit' onClick={() => sndAdd.play()}>
						<ImDownload size={30} />
					</button>
				</form>
			)}
		</>
	)
}

export default Panel
