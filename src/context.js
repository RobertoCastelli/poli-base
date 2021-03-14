import React, { useState, useEffect } from "react"
import firebase from "firebase/app"
import { dbRef } from "./firebase"

// CREATE CONTEXT
export const DataContext = React.createContext()

const ContextProvider = (props) => {
	// VARIABLE STATE
	const [ticket, setTicket] = useState("")
	const [description, setDescription] = useState("")
	const [tickets, setTickets] = useState([])
	const [isHidden, setIsHidden] = useState(false)

	let timeNow = new Date(
		firebase.firestore.Timestamp.now().seconds * 1000
	).toLocaleString()

	// TOGGLE INPUT PANEL
	const togglePanel = () => setIsHidden(!isHidden)

	// DELETE TICKET
	const deleteTicket = (ticketID) =>
		dbRef
			.doc(ticketID)
			.delete()
			.then(() => console.log(`ticket deleted ID: ${ticketID}`))
			.catch((err) => console.log(`hups! --> ${err.message}`))

	// UPDATE TICKET COMPLETE --> TRUE / FALSE
	const editTicket = (ticketID, completed) => {
		dbRef
			.doc(ticketID)
			.update({
				completed: !completed,
			})
			.then(() => console.log(`edited ID: ${ticketID} to ${completed}`))
			.catch((err) => `hups! --> ${err.message}`)
	}

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

	// SHOW TICKETS ON SCREEN
	useEffect(() => {
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
	}, [])

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
				}}>
				{props.children}
			</DataContext.Provider>
		</div>
	)
}

export default ContextProvider
