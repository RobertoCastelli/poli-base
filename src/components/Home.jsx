import React from "react"
// COMPONENTS
import TicketList from "./TicketList"
import Counters from "./Counters"

const Home = () => {
	return (
		<div>
			<Counters />
			<TicketList />
		</div>
	)
}

export default Home
