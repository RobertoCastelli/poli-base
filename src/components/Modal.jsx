import React, { useContext } from "react"
// REACT ICONS
import { GrSend } from "react-icons/gr"
import { FcCancel } from "react-icons/fc"
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
						<div className='modal-title'>inserire le ore</div>
						<select onChange={(e) => setModalOre(e.target.value)}>
							{options.map((opt) => (
								<option key={opt.value} value={opt.value}>
									{opt.label}
								</option>
							))}
						</select>
						<div className='buttons'>
							<label className='send' htmlFor='send'>
								invia
							</label>
							<button name='send' type='submit'>
								<GrSend size={30} />
							</button>
							<label className='cancel' htmlFor='cancel'>
								annulla
							</label>
							<button name='cancel' type='button' onClick={closeModal}>
								<FcCancel size={30} />
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	)
}

export default Modal
