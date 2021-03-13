import React, { useState, useEffect } from "react"
import { dbRef } from "./firebase"
import firebase from "firebase/app"

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
			.catch((err) => console.log(`hups! ${err.message}`))
	}

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

	const handleSubmit = (e) => {
		e.preventDefault()
		addTicket()
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
					tickets,
					togglePanel,
					isHidden,
				}}>
				{props.children}
			</DataContext.Provider>
		</div>
	)
}

export default ContextProvider
