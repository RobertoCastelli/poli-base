import React, { useContext } from "react"
import { GrSend } from "react-icons/gr"
import { DataContext } from "../context"

const Modal = () => {
	const { handleModal, setModalOre, isOpenModal } = useContext(DataContext)
	return (
		<div>
			<form
				className={isOpenModal ? "modal" : undefined}
				onSubmit={handleModal}>
				<div className='modal-title'>inserire le ore</div>
				<select
					defaultValue={"DEFAULT"}
					onChange={(e) => setModalOre(e.target.value)}>
					<option value='DEFAULT'>Ore: </option>
					<option value='2'>2</option>
					<option value='4'>4</option>
					<option value='6'>6</option>
					<option value='8'>8</option>
					<option value='10'>10</option>
					<option value='12'>12</option>
					<option value='14'>14</option>
					<option value='16'>16</option>
				</select>
				<button type='submit'>
					<GrSend size={30} />
				</button>
			</form>
		</div>
	)
}

export default Modal
