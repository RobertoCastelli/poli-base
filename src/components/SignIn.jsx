import React, { useContext } from "react"
import { Link } from "react-router-dom"
// REACT ICONS
import { AiOutlineHome } from "react-icons/ai"
import { BsPersonCheck } from "react-icons/bs"
// CONTEXT
import { DataContext } from "../context"
import { GrServerCluster } from "react-icons/gr"

const SignIn = () => {
	const { user, setUser, handleSignIn } = useContext(DataContext)
	return (
		<div>
			<form className='input-sign-in' onSubmit={handleSignIn}>
				<input
					type='email'
					className='sign-in-email'
					placeholder='email'
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					onFocus={(e) => setUser({ ...user, email: "" })}
					value={user.email}
					required
				/>
				<input
					type='password'
					className='sing-in-password'
					placeholder='password'
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					onFocus={(e) => setUser({ ...user, password: "" })}
					value={user.password}
					required
				/>
				<button className='btn-sign-in-submit' type='submit'>
					<BsPersonCheck size={30} />
				</button>
			</form>
			<div className='sign-in-buttons-home'>
				<Link to='/'>
					<button className='btn-sign-in-home' type='button' name='home'>
						<AiOutlineHome size={30} />
					</button>
				</Link>
			</div>
		</div>
	)
}
export default SignIn
