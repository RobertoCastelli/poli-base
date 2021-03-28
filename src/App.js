import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Calendar from "./components/Calendar"
import Footer from "./components/Footer"
import Title from "./components/Title"
import Error from "./components/Error"
import Home from "./components/Home"
import Modal from "./components/Modal"

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<Title />
				<div className='content'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/calendar' component={Calendar} />
						<Route component={Error} />
					</Switch>
					<Modal />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
