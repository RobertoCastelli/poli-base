import React, { useState, useEffect, useCallback } from "react"
import firebase from "firebase/app"
import { dbRef } from "./firebase"

// CREATE CONTEXT
export const DataContext = React.createContext()

//~~~~~~~~~~~~~~~//
//  DATE & TIME  //
//~~~~~~~~~~~~~~~//

// TODAY DATEPICKER
const today = new Date().toISOString().substring(0, 10)

// TODAY DATE & TIME FROM DB
// let dateAndTimeNow = new Date(
// 	firebase.firestore.Timestamp.now().seconds * 1000
// )
// 	.toLocaleString()
// 	.split(",")[0]

// TODAY DATE & TIME FROM DB
const dateAndTimeNow = firebase.firestore.FieldValue.serverTimestamp()

//~~~~~~~~~~~~~~//
//  FC CONTEXT  //
//~~~~~~~~~~~~~~//

const ContextProvider = (props) => {
	// VARIABLE STATE
	const [index, setIndex] = useState("")
	const [ticket, setTicket] = useState("")
	const [description, setDescription] = useState("")
	const [date, setDate] = useState(today)
	const [tickets, setTickets] = useState([])
	const [isHidden, setIsHidden] = useState(true)
	const [oreTotali, setOreTotali] = useState(0)
	const [filterCompleted, setFilterCompleted] = useState(0)
	const [filterIncomplete, setFilterIncomplete] = useState(0)
	const [filterTitle, setFilterTitle] = useState("")
	const [modalOre, setModalOre] = useState(0)
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [ticketsToCalendar, setTicketsToCalendar] = useState([])

	//~~~~~~~~~~~~~//
	//    PANEL    //
	//~~~~~~~~~~~~~//

	// TOGGLE ADMIN INPUT PANEL
	const togglePanel = () => setIsHidden(!isHidden)

	// ADD TICKET TO DB
	const addTicket = () => {
		dbRef
			.add({
				ticket,
				description,
				ore: 0,
				date,
				createdAt: dateAndTimeNow,
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

	// DELETE TICKET
	const deleteTicket = (ticketID) => {
		let result = window.confirm("premere OK per cancellare il TICKET")
		result &&
			dbRef
				.doc(ticketID)
				.delete()
				.then(() => console.log(`ticket deleted ID: ${ticketID}`))
				.catch((err) => console.log(`hups! --> ${err.message}`))
	}

	// UPDATE TICKET STATE (IN ORE MODAL)
	const updateTicketStateAndOre = () => {
		dbRef
			.doc(index)
			.update({
				ore: parseInt(modalOre),
			})
			.then(() => console.log(`edited ore ID: ${index} to ${modalOre} ore`))
			.catch((err) => `hups! --> ${err.message}`)
	}

	//~~~~~~~~~~~//
	//   MODAL   //
	//~~~~~~~~~~~//

	// OPEN MODAL
	const openModal = (ticketID) => {
		setIsOpenModal(true)
		setIndex(ticketID)
	}

	// CLOSE MODAL
	const closeModal = () => setIsOpenModal(false)

	// UPDATE ORE --> CLOSE MODAL
	const handleModal = (e) => {
		e.preventDefault()
		updateTicketStateAndOre()
		setIsOpenModal(false)
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
		dbRef
			.where("ore", ">", 0)
			.get()
			.then((snapshot) => setFilterCompleted(snapshot.size))
			.catch((err) => console.log(`hups! ${err.message}`))
	}, [tickets])

	// COUNT INCOMPLETE TICKETS
	useEffect(() => {
		dbRef
			.where("ore", "==", 0)
			.get()
			.then((snapshot) => setFilterIncomplete(snapshot.size))
			.catch((err) => console.log(`hups! ${err.message}`))
	}, [tickets])

	// BOILERPLATE TEMPLATE
	const template = (doc) => ({
		id: doc.id,
		ticket: doc.data().ticket,
		description: doc.data().description,
		ore: doc.data().ore,
	})

	// SHOW INCOMPLETE TICKETS ON CLICK
	const showIncompleteTickets = useCallback(() => {
		setFilterTitle("open tickets")
		dbRef
			.orderBy("createdAt", "desc")
			.where("ore", "==", 0)
			.onSnapshot((snapshot) =>
				setTickets(snapshot.docs.map((doc) => template(doc)))
			)
	}, [])

	// SHOW COMPLETED TICKETS ON CLICK
	const showCompletedTickets = () => {
		setFilterTitle("closed tickets")
		dbRef
			.where("ore", ">", 0)
			.onSnapshot((snapshot) =>
				setTickets(snapshot.docs.map((doc) => template(doc)))
			)
	}

	// SHOW INCOMPLETE TICKETS ON LOAD
	useEffect(() => showIncompleteTickets(), [showIncompleteTickets])

	//~~~~~~~~~~~~~~~~//
	//    CALENDAR    //
	//~~~~~~~~~~~~~~~~//

	// HANDLE TICKET "EVENT" ON CALENDAR
	const handleCalendarTicket = (ticketID) => {
		const ticketsTemp = [...tickets]
		console.log(tickets)
		const calendarTitle = ticketID.event._def.title
		const test = ticketsTemp.filter((ticket) => ticket.ticket === calendarTitle)
		console.log(test.pop().description)
	}

	// SHOW TICKET ON CALENDAR
	useEffect(() => {
		const ticketsToCalendarArr = []
		dbRef
			.get()
			.then((snapshot) => {
				snapshot.forEach((doc) =>
					ticketsToCalendarArr.push({
						title: doc.data().ticket,
						date: doc.data().date,
					})
				)
			})
			.catch((err) => `hups! ${err.message}`)
		setTicketsToCalendar(ticketsToCalendarArr)
	}, [])

	return (
		<div>
			<DataContext.Provider
				value={{
					ticket,
					setTicket,
					description,
					setDescription,
					date,
					setDate,
					handleSubmit,
					tickets,
					togglePanel,
					isHidden,
					deleteTicket,
					openModal,
					closeModal,
					oreTotali,
					filterCompleted,
					filterIncomplete,
					showCompletedTickets,
					showIncompleteTickets,
					filterTitle,
					handleModal,
					setModalOre,
					isOpenModal,
					ticketsToCalendar,
					handleCalendarTicket,
				}}>
				{props.children}
			</DataContext.Provider>
		</div>
	)
}

export default ContextProvider

/**
 * TODO:
 * hide ORE if they are 0
 * change permission firebase
 * add edificio
 *
 *
 * FIXME:
 * event ticket on calendar if completed bug
 *
 */
