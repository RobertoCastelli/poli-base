import React from "react"

const Panel = () => {
	return (
		<>
			<div className='panel'>
				<input type='date' className='calendar' />
				<input type='text' className='ticket' placeholder='ticket' />
				<input type='text' className='description' placeholder='description' />
				<button>Add</button>
			</div>
		</>
	)
}

export default Panel
