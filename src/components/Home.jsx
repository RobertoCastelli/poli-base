import React from "react"
// COMPONENTS
import TicketList from "./TicketList"
import Counters from "./Counters"
import TitleState from "./TitleState"

const Home = () => {
	return (
		<div>
			<Counters />
			<TitleState />
			<TicketList />
		</div>
	)
}

export default Home
