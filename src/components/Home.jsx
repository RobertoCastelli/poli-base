import React from "react"
import FilterTitle from "./FilterTitle"
import Modal from "./Modal"
import Panel from "./Panel"
import TicketList from "./TicketList"
import Counter from "./Counter"

const Home = () => {
	return (
		<div>
			<Panel />
			<Counter />
			<FilterTitle />
			<TicketList />
			<Modal />
		</div>
	)
}

export default Home
