import React, { useState, useEffect } from "react"
import firebase from "firebase/app"
import { dbRef } from "./firebase"

/**
 * TODO:
 * report excel all tickets
 * filter for month
 * hide ORE if they are 0
 * change permission firebase
 * add edificio
 *
 *
 * FIXME:
 * prompt only numbers
 */

// CREATE CONTEXT
export const DataContext = React.createContext()

const ContextProvider = (props) => {
	// VARIABLE STATE
	const [ticket, setTicket] = useState("")
	const [description, setDescription] = useState("")
	const [tickets, setTickets] = useState([])
	const [isHidden, setIsHidden] = useState(false)
	const [oreTotali, setOreTotali] = useState(0)
	const [filterCompleted, setFilterCompleted] = useState(0)
	const [filterIncomplete, setFilterIncomplete] = useState(0)
	const [filterTitle, setFilterTitle] = useState("")

	// GET DATE & TIME
	let timeNow = new Date(
		firebase.firestore.Timestamp.now().seconds * 1000
	).toLocaleString()

	// SHOW TICKETS ON LOAD
	useEffect(() => {
		showAllTickets()
	}, [])

	//~~~~~~~~~~~~~//
	//    PANEL    //
	//~~~~~~~~~~~~~//

	// TOGGLE INPUT PANEL
	const togglePanel = () => setIsHidden(!isHidden)

	// ADD TICKET TO DB
	const addTicket = () => {
		dbRef
			.add({
				ticket,
				description,
				ore: 0,
				completed: false,
				time: timeNow,
			})
			.then((docRef) => console.log(`ticket added ID: ${docRef.id}`))
			.catch((err) => console.log(`hups! --> ${err.message}`))
	}

	// SUBMIT TICKET + clean inputs
	const handleSubmit = (e) => {
		e.preventDefault()
		addTicket()
		setTicket("")
		setDescription("")
	}

	//~~~~~~~~~~~~~~~~~//
	//   TICKET LIST   //
	//~~~~~~~~~~~~~~~~~//

	// DELETE TICKET TO DB
	const deleteTicket = (ticketID) => {
		let result = window.confirm("premere OK per cancellare il TICKET")
		result &&
			dbRef
				.doc(ticketID)
				.delete()
				.then(() => console.log(`ticket deleted ID: ${ticketID}`))
				.catch((err) => console.log(`hups! --> ${err.message}`))
	}

	// EDIT TICKET IF COMPLETED
	const editTicket = (ticketID, completed) => {
		!completed &&
			dbRef
				.doc(ticketID)
				.update({
					completed: !completed,
					ore: parseInt(window.prompt("Inserire ore totali lavorate (i.e. 8)")),
				})
				.then(() => console.log(`edited ID: ${ticketID} to ${completed}`))
				.catch((err) => `hups! --> ${err.message}`)
	}

	//~~~~~~~~~~~~~~~//
	//    FILTERS    //
	//~~~~~~~~~~~~~~~//

	// SUM ALL ORE
	useEffect(() => {
		const getAllOre = tickets.map((ore) => ore.ore)
		setOreTotali(getAllOre.reduce((a, b) => a + b, 0))
	}, [tickets])

	// COUNT COMPLETED TICKETS
	useEffect(() => {
		let oreTemp = 0
		dbRef
			.where("completed", "==", true)
			.get()
			.then((snapshot) => setFilterCompleted(snapshot.size))
			.catch((err) => console.log(`hups! ${err.message}`))
	}, [tickets])

	// COUNT INCOMPLETE TICKETS
	useEffect(() => {
		let oreTemp = 0
		dbRef
			.where("completed", "==", false)
			.get()
			.then((snapshot) => setFilterIncomplete(snapshot.size))
			.catch((err) => console.log(`hups! ${err.message}`))
	}, [tickets])

	// SHOW INCOMPLETE TICKETS ON CLICK
	const showIncompleteTickets = () => {
		setFilterTitle("open tickets")
		dbRef.where("completed", "==", false).onSnapshot((snapshot) =>
			setTickets(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					ticket: doc.data().ticket,
					description: doc.data().description,
					ore: doc.data().ore,
					completed: doc.data().completed,
				}))
			)
		)
	}

	// SHOW COMPLETED TICKETS ON CLICK
	const showCompletedTickets = () => {
		setFilterTitle("close tickets")
		dbRef.where("completed", "==", true).onSnapshot((snapshot) =>
			setTickets(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					ticket: doc.data().ticket,
					description: doc.data().description,
					ore: doc.data().ore,
					completed: doc.data().completed,
				}))
			)
		)
	}

	// SHOW ALL TICKETS ON CLICK
	const showAllTickets = () => {
		setFilterTitle("total tickets")
		dbRef.orderBy("time", "desc").onSnapshot((snapshot) =>
			setTickets(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					ticket: doc.data().ticket,
					description: doc.data().description,
					ore: doc.data().ore,
					completed: doc.data().completed,
				}))
			)
		)
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
					tickets,
					togglePanel,
					isHidden,
					deleteTicket,
					editTicket,
					oreTotali,
					filterCompleted,
					filterIncomplete,
					showCompletedTickets,
					showIncompleteTickets,
					showAllTickets,
					filterTitle,
					timeNow,
				}}>
				{props.children}
			</DataContext.Provider>
		</div>
	)
}

export default ContextProvider
