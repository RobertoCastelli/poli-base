import React, { useState } from "react"

export const DataContext = React.createContext()

const ContextProvider = (props) => {
	const [ticket, setTicket] = useState("")
	const [description, setDescription] = useState("")
	const [todoList, setTodoList] = useState([])

	const addTodoList = () => {
		setTodoList([
			...todoList,
			{
				id: ticket,
				text: description,
				completed: false,
			},
		])
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addTodoList()
		setTicket("")
		setDescription("")
	}

	return (
		<div>
			<DataContext.Provider
				value={{
					ticket,
					setTicket,
					description,
					setDescription,
					handleSubmit,
					todoList,
				}}>
				{props.children}
			</DataContext.Provider>
		</div>
	)
}

export default ContextProvider
