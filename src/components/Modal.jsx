import React, { useContext } from "react"
import { GrSend } from "react-icons/gr"
import { DataContext } from "../context"
import { FcCancel } from "react-icons/fc"

const Modal = () => {
	const { handleModal, setModalOre, isOpenModal, closeModal } = useContext(
		DataContext
	)
	return (
		<>
			{isOpenModal && (
				<div className='modal-wrapper'>
					<form className='modal' onSubmit={handleModal}>
						<div className='modal-title'>inserire le ore</div>
						<select
							defaultValue={"DEFAULT"}
							onChange={(e) => setModalOre(e.target.value)}>
							<option value='DEFAULT'>...</option>
							<option value='0'>RIAPRI TICKET</option>
							<option value='2'>2 ore</option>
							<option value='4'>4 ore</option>
							<option value='6'>6 ore</option>
							<option value='8'>8 ore</option>
							<option value='10'>10 ore</option>
							<option value='12'>12 ore</option>
							<option value='14'>14 ore</option>
							<option value='16'>16 ore</option>
						</select>
						<div className='buttons'>
							<label htmlFor='send'>invia</label>
							<button name='send' type='submit'>
								<GrSend size={30} />
							</button>
							<label htmlFor='cancel'>annulla</label>
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
