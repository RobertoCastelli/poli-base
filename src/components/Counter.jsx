import React from "react"
import { BsFillUnlockFill } from "react-icons/bs"
import { BsLockFill } from "react-icons/bs"

const Counter = () => {
	return (
		<div className='stato'>
			<p className='lock-open'>
				<BsFillUnlockFill size={20} />
			</p>
			<p className='lock-close'>
				<BsLockFill size={20} />
			</p>
		</div>
	)
}

export default Counter
