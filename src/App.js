import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Calendar from "./components/Calendar"
import Footer from "./components/Footer"
import Title from "./components/Title"
import Error from "./components/Error"
import Home from "./components/Home"
import Modal from "./components/Modal"
import InputPanel from "./components/InputPanel"
import SignIn from "./components/SignIn"

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<Title />
				<div className='content'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/calendar' component={Calendar} />
						<Route path='/admin-panel' component={InputPanel} />
						<Route path='/sign-in' component={SignIn} />
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
