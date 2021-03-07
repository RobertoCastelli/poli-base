import React, { useState, useEffect } from "react"

export const DataContext = React.createContext()

const ContextProvider = (props) => {
	const [ticket, setTicket] = useState("")
	const [description, setDescription] = useState("")
	const [todoList, setTodoList] = useState([])
	const [isHidden, setIsHidden] = useState(true)
	const [completed, setCompleted] = useState(0)
	const [incomplete, setIncomplete] = useState(0)
	const [oreTotali, setOreTotali] = useState(0)

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

	useEffect(() => {
		const todoListTemp = [...todoList]
		const ore = todoListTemp.map((ore) => ore.ore)
		const sommaOre = ore.reduce((a, b) => a + b, 0)
		setOreTotali(sommaOre)
	}, [todoList])

	const toggleVisible = () => setIsHidden(!isHidden)

	const toggleCompleted = (todoId) => {
		const updateTodoList = todoList.map((todo) => {
			return todo.id === todoId
				? {
						...todo,
						completed: !todo.completed,
						ore: parseInt(prompt("Inserire ore")),
				  }
				: todo
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
				ore: 0,
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
					data,
					oreTotali,
				}}>
				{props.children}
			</DataContext.Provider>
		</div>
	)
}

export default ContextProvider
