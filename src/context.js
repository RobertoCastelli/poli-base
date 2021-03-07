import React, { useState, useEffect } from "react"

export const DataContext = React.createContext()

const ContextProvider = (props) => {
	const [ticket, setTicket] = useState("")
	const [description, setDescription] = useState("")
	const [todoList, setTodoList] = useState([])
	const [isHidden, setIsHidden] = useState(true)
	const [completed, setCompleted] = useState(0)
	const [incomplete, setIncomplete] = useState(0)
	const [ore, setOre] = useState(0)

	const data = new Date().toLocaleString().split(",")[0]

	useEffect(
		() =>
			setCompleted(todoList.filter((todo) => todo.completed === true).length),
		[todoList]
	)

	useEffect(
		() =>
			setIncomplete(todoList.filter((todo) => todo.completed === false).length),
		[todoList]
	)

	const toggleVisible = () => setIsHidden(!isHidden)

	const addOre = () => setOre(prompt("immetti ore"))

	const toggleCompleted = (todoId) => {
		const updateTodoList = todoList.map((todo) => {
			addOre()
			return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
		})
		setTodoList(updateTodoList)
	}

	const deleteTodo = (todoId) =>
		setTodoList(todoList.filter((todo) => todo.id !== todoId))

	const addTodoList = () => {
		setTodoList([
			...todoList,
			{
				id: ticket,
				text: description,
				ore,
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
					toggleVisible,
					isHidden,
					deleteTodo,
					toggleCompleted,
					completed,
					incomplete,
					ore,
					data,
				}}>
				{props.children}
			</DataContext.Provider>
		</div>
	)
}

export default ContextProvider
