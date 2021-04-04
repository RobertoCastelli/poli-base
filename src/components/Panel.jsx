import React, { useContext } from "react"
// REACT ICONS
import { IoMdClose } from "react-icons/io"
import { AiOutlineFileAdd, AiOutlineHome } from "react-icons/ai"
// CONTEXT
import { DataContext } from "../context"
import { Link } from "react-router-dom"

const Panel = () => {
	const {
		ticket,
		description,
		setTicket,
		setDescription,
		date,
		setDate,
		handleSubmit,
		cancelInputs,
		messagePanel,
	} = useContext(DataContext)

	return (
		<>
			<form className='input-panel' onSubmit={handleSubmit}>
				<p className='info-message-panel'>{messagePanel}</p>
				<input
					type='text'
					className='ticket-panel'
					placeholder='ticket'
					maxLength='9'
					onChange={(e) => setTicket(e.target.value)}
					value={ticket}
					required
				/>
				<input
					type='text'
					className='description-panel'
					placeholder='description'
					maxLength='40'
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
				<div className='panel-buttons'>
					<div>
						<button className='btn-panel-add' type='submit' name='add'>
							<AiOutlineFileAdd size={30} />
						</button>
					</div>
					<div>
						<button
							className='btn-panel-cancel'
							type='button'
							name='cancel'
							onClick={() => cancelInputs()}>
							<IoMdClose size={30} />
						</button>
					</div>
					<div>
						<Link to='/'>
							<button className='btn-panel-home' type='button' name='home'>
								<AiOutlineHome size={30} />
							</button>
						</Link>
					</div>
				</div>
			</form>
		</>
	)
}

export default Panel
