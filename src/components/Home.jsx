import React from "react"
import FilterTitle from "./FilterTitle"
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
		</div>
	)
}

export default Home
