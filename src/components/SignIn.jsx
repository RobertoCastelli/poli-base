import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { DataContext } from "../context"

const SignIn = () => {
	const { user, setUser, handleSignIn } = useContext(DataContext)
	return (
		<div>
			<form onSubmit={handleSignIn}>
				<input
					type='email'
					className='email'
					placeholder='email'
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					value={user.email}
					required
				/>
				<input
					type='password'
					className='password'
					placeholder='password'
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					value={user.password}
					required
				/>
				<button type='submit'>invia</button>
			</form>
			<div className='panel-buttons-home'>
				<Link to='/'>
					<button className='btn-panel-home' type='button' name='home'>
						<AiOutlineHome size={30} />
					</button>
				</Link>
			</div>
		</div>
	)
}
export default SignIn
