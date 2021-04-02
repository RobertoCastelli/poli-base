import React, { useContext } from "react"
// REACT ICONS
import { GrSend } from "react-icons/gr"
import { IoMdClose } from "react-icons/io"
// CONTEXT
import { DataContext } from "../context"

const Modal = () => {
	const {
		handleModal,
		isOpenModal,
		closeModal,
		setModalOre,
		options,
	} = useContext(DataContext)
	return (
		<>
			{isOpenModal && (
				<div className='modal-wrapper'>
					<form className='modal' onSubmit={handleModal}>
						<div className='modal-title'>inserire ore lavorate</div>
						<select
							className='modal-select'
							onChange={(e) => setModalOre(e.target.value)}>
							{options.map((opt) => (
								<option key={opt.value} value={opt.value}>
									{opt.label}
								</option>
							))}
						</select>
						<div className='modal-buttons'>
							<div>
								<button className='btn-modal-send' name='send' type='submit'>
									<GrSend size={30} />
								</button>
								<label htmlFor='send'>invia</label>
							</div>
							<div>
								<button
									className='btn-modal-cancel'
									name='cancel'
									type='button'
									onClick={closeModal}>
									<IoMdClose size={30} />
								</button>
								<label htmlFor='cancel'>annulla</label>
							</div>
						</div>
					</form>
				</div>
			)}
		</>
	)
}

export default Modal
