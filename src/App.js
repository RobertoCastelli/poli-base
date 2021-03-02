import React from "react"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Panel from "./components/Panel"
import TicketList from "./components/TicketList"
import Title from "./components/Title"

function App() {
	return (
		<div className='container'>
			<Title />
			<div className='content'>
				<Panel />
				<Counter />
				<TicketList />
			</div>
			<Footer />
		</div>
	)
}

export default App
