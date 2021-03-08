import React, { useState, useEffect } from "react"

export const DataContext = React.createContext()

const ContextProvider = (props) => {
	// VARIABLE STATE
	const [ticket, setTicket] = useState("")
	const [description, setDescription] = useState("")
	const [todoList, setTodoList] = useState([])
	const [filteredList, setFilteredList] = useState([])
	const [isHidden, setIsHidden] = useState(true)
	const [completed, setCompleted] = useState(0)
	const [incomplete, setIncomplete] = useState(0)
	const [oreTotali, setOreTotali] = useState(0)

	// SHOW DATA (i.e. 01/01/2021)
	const data = new Date().toLocaleString().split(",")[0]

	// TOGGLE INPUT PANEL
	const toggleVisible = () => setIsHidden(!isHidden)

	// ADD TICKET TO THE LIST
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

	// TOGGLE COMPLETED ITEM
	const toggleCompleted = (todoId) => {
		const updateTodoList = todoList.map((todo) => {
			return todo.id === todoId
				? {
						...todo,
						completed: !todo.completed,
						ore: parseInt(window.prompt("Inserire ore")),
				  }
				: todo
		})
		setTodoList(updateTodoList)
		setFilteredList(updateTodoList)
	}

	// SHOW OPEN TICKETS
	const filterOpen = () => {
		const todoListTemp = [...todoList]
		setFilteredList(todoListTemp.filter((todo) => todo.completed === false))
	}

	// SHOW CLOSED TICKETS
	const filterClose = () => {
		const todoListTemp = [...todoList]
		setFilteredList(todoListTemp.filter((todo) => todo.completed !== false))
	}

	// SHOW TOTAL TICKETS
	const filterTotal = () => {
		const todoListTemp = [...todoList]
		setFilteredList(todoListTemp.filter((todo) => todo))
	}

	// CREATE A COPY FOR FILTER, WHEN A TICKET IS CREATED
	useEffect(() => {
		setFilteredList(todoList)
	}, [todoList])

	// COUNT COMPLETE TICKETS
	useEffect(
		() =>
			setCompleted(todoList.filter((todo) => todo.completed === true).length),
		[todoList]
	)

	// COUNT INCOMPLETE TICKETS
	useEffect(
		() =>
			setIncomplete(todoList.filter((todo) => todo.completed === false).length),
		[todoList]
	)

	// COUNT TOTAL ORE
	useEffect(() => {
		const todoListTemp = [...todoList]
		const ore = todoListTemp.map((ore) => ore.ore)
		const sommaOre = ore.reduce((a, b) => a + b, 0)
		setOreTotali(sommaOre)
	}, [todoList])

	// DELETE TICKET
	const deleteTodo = (todoId) =>
		setTodoList(todoList.filter((todo) => todo.id !== todoId))

	// HANDLE INPUT SUBMIT & clear textbox
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
					filterOpen,
					filterTotal,
					filterClose,
					filteredList,
				}}>
				{props.children}
			</DataContext.Provider>
		</div>
	)
}

export default ContextProvider
