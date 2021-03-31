import React from "react"
// COMPONENTS
import Panel from "./Panel"
import TicketList from "./TicketList"
import Counters from "./Counters"
import TitleState from "./TitleState"

const Home = () => {
	return (
		<div>
			<Panel />
			<Counters />
			<TitleState />
			<TicketList />
		</div>
	)
}

export default Home
