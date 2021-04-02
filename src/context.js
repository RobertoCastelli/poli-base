import React, { useState, useEffect, useCallback } from "react"
// FIREBASE
import firebase from "firebase/app"
import { dbRef } from "./firebase"
// DATA
import { options } from "./options"

// CREATE CONTEXT
export const DataContext = React.createContext()

//~~~~~~~~~~~~~~~//
//  DATE & TIME  //
//~~~~~~~~~~~~~~~//

// TODAY DATEPICKER
const today = new Date().toISOString().substring(0, 10)

// TODAY DATE & TIME FROM DB
const dateAndTimeNow = firebase.firestore.FieldValue.serverTimestamp()

// TODAY DATE & TIME FROM DB
// let dateAndTimeNow = new Date(
// 	firebase.firestore.Timestamp.now().seconds * 1000
// )
// 	.toLocaleString()
// 	.split(",")[0]

//~~~~~~~~~~~~~~//
//  FC CONTEXT  //
//~~~~~~~~~~~~~~//

const ContextProvider = (props) => {
	// VARIABLE STATE
	const [index, setIndex] = useState("")
	const [tickets, setTickets] = useState([])
	const [ticket, setTicket] = useState("")
	const [description, setDescription] = useState("")
	const [date, setDate] = useState(today)
	const [isHidden, setIsHidden] = useState(true)
	const [oreTotali, setOreTotali] = useState(0)
	const [filterCompleted, setFilterCompleted] = useState(0)
	const [filterIncomplete, setFilterIncomplete] = useState(0)
	const [filterTitle, setFilterTitle] = useState("")
	const [modalOre, setModalOre] = useState(0)
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [ticketsToCalendar, setTicketsToCalendar] = useState([])
	const [calendarTicket, setCalendarTicket] = useState([])
	const [completeTicketsArray, setCompleteTicketsArray] = useState([])

	//~~~~~~~~~~~~~~~~~~~//
	//    TITLE PANEL    //
	//~~~~~~~~~~~~~~~~~~~//

	// TOGGLE ADMIN INPUT PANEL
	const togglePanel = () => {
		setIsHidden(!isHidden)
	}

	// TOGGLE ANIMATION ON MENU
	useEffect(() => {
		const btnMenu = document.querySelector(".btn-menu")
		const ulMenu = document.querySelector(".ul-count")
		ulMenu.classList.toggle("ul-count-animation")
		btnMenu.classList.toggle("btn-menu-animation")
	}, [isHidden])

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

	//~~~~~~~~~~~//
	//   MODAL   //
	//~~~~~~~~~~~//

	// OPEN MODAL
	const openModal = (ticketID) => {
		setModalOre(0)
		setIsOpenModal(true)
		setIndex(ticketID)
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
			.catch((err) => console.log(`hups! --> ${err.message}`))
	}, [tickets])

	// COUNT INCOMPLETE TICKETS
	useEffect(() => {
		dbRef
			.where("ore", "==", 0)
			.get()
			.then((snapshot) => setFilterIncomplete(snapshot.size))
			.catch((err) => console.log(`hups! --> ${err.message}`))
	}, [tickets])

	// BOILERPLATE TEMPLATE
	const template = (doc) => ({
		id: doc.id,
		ticket: doc.data().ticket,
		description: doc.data().description,
		date: doc.data().date,
		createdAt: doc.data().createdAt,
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
		const calendarTitle = ticketID.event._def.title
		dbRef
			.get()
			.then((snapshot) =>
				snapshot.forEach((doc) => {
					if (calendarTitle === doc.data().ticket) {
						setCalendarTicket(doc.data())
					}
				})
			)
			.catch((err) => `hups! ${err.message}`)
	}

	// SHOW TICKET ON CALENDAR
	useEffect(() => {
		dbRef.onSnapshot((snapshot) => {
			setTicketsToCalendar(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					title: doc.data().ticket,
					date: doc.data().date,
				}))
			)
		})
	}, [])

	// CHECK CLOSED TICKETS (AFTER CALENDAR-DID-MOUNT WITH CALENDAR PROP)
	const checkClosed = () => {
		let completeTickets = []
		dbRef.where("ore", ">", 0).onSnapshot((snapshot) => {
			snapshot.docs.forEach((doc) => {
				completeTickets.push(doc.data().ticket)
			})
			setCompleteTicketsArray(completeTickets)
		})
	}

	// CHANGE TICKET COLOR ON CALENDAR IF COMPLETE
	useEffect(() => {
		const stickyTitle = document.querySelectorAll(".fc-sticky")
		stickyTitle.forEach((elem) =>
			completeTicketsArray.includes(elem.textContent)
				? elem.classList.add("fc-sticky-complete")
				: elem.classList.remove("fc-sticky-complete")
		)
	}, [completeTicketsArray])

	const updateCalendarTicketOre = (ticketID) => {
		const calendarIndex = ticketsToCalendar.filter(
			(doc) => doc.title === ticketID
		)
		openModal(calendarIndex[0].id)
	}

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
					tickets,
					isHidden,
					togglePanel,
					handleSubmit,
					deleteTicket,
					isOpenModal,
					handleModal,
					openModal,
					closeModal,
					setModalOre,
					options,
					oreTotali,
					filterCompleted,
					filterIncomplete,
					filterTitle,
					showCompletedTickets,
					showIncompleteTickets,
					ticketsToCalendar,
					calendarTicket,
					handleCalendarTicket,
					checkClosed,
					updateCalendarTicketOre,
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
 * add edificio select
 * dragable/change date calendar tickets
 *
 * FIXME:
 * edit button calendar
 *
 *
 */
