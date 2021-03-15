import React from "react"
import { GrSend } from "react-icons/gr"

const Modal = () => {
	return (
		<div className='modal-wrapper'>
			<div className='modal'>
				<p className='modal-title'>inserire ore totali</p>
				<select className='modal-select'>
					<option value='2'>2</option>
					<option value='4'>4</option>
					<option value='6'>6</option>
					<option value='8'>8</option>
					<option value='10'>10</option>
					<option value='12'>12</option>
					<option value='14'>14</option>
					<option value='16'>16</option>
				</select>
				<button className='modal-button'>
					<GrSend size={30} />
				</button>
			</div>
		</div>
	)
}

export default Modal
