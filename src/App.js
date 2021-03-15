import React from "react"
import Counter from "./components/Counter"
import FilterTitle from "./components/FilterTitle"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
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
				<FilterTitle />
				<TicketList />
				<Modal />
			</div>
			<Footer />
		</div>
	)
}

export default App
