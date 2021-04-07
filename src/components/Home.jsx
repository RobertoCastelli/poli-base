import React from "react"
// COMPONENTS
import TicketList from "./TicketList"
import OptionMenu from "./OptionMenu"

const Home = () => {
	return (
		<div>
			<OptionMenu />
			<TicketList />
		</div>
	)
}

export default Home
