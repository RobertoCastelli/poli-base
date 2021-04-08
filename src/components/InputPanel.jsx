import React, { useContext } from "react"
// REACT ICONS
import { AiOutlineFileAdd, AiOutlineHome } from "react-icons/ai"
// CONTEXT
import { DataContext } from "../context"
import { Link } from "react-router-dom"

const InputPanel = () => {
	const {
		ticket,
		description,
		setTicket,
		setDescription,
		date,
		setDate,
		handleSubmit,
	} = useContext(DataContext)

	return (
		<>
			<form className='input-panel' onSubmit={handleSubmit}>
				<input
					type='text'
					className='ticket-panel'
					placeholder='ticket'
					maxLength='9'
					onChange={(e) => setTicket(e.target.value)}
					onFocus={() => setTicket("")}
					value={ticket}
					required
				/>
				<input
					type='text'
					className='description-panel'
					placeholder='description'
					maxLength='40'
					onChange={(e) => setDescription(e.target.value)}
					onFocus={() => setDescription("")}
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
				</div>
			</form>
			<div className='panel-buttons-home'>
				<Link to='/'>
					<button className='btn-panel-home' type='button' name='home'>
						<AiOutlineHome size={30} />
					</button>
				</Link>
			</div>
		</>
	)
}

export default InputPanel
