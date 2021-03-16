import React, { useContext } from "react"
import { GrSend } from "react-icons/gr"
import { DataContext } from "../context"

const Modal = () => {
	const { handleModal, setModalOre, isOpenModal } = useContext(DataContext)
	return (
		<>
			{isOpenModal && (
				<div className='modal-wrapper'>
					<form className='modal' onSubmit={handleModal}>
						<div className='modal-title'>inserire le ore - riapri ticket</div>
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
						<button type='submit'>
							<GrSend size={30} />
						</button>
					</form>
				</div>
			)}
		</>
	)
}

export default Modal
