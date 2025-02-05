import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function Bubbles() {
	// Generate multiple bubbles with random properties
	const bubbles = Array.from({ length: 15 }).map((_, index) => {
		const size = Math.random() * 40 + 20; // Random size between 20px - 60px
		const left = Math.random() * 100; // Random horizontal position
		const duration = Math.random() * 5 + 5; // Random animation duration (5s-10s)
		const delay = Math.random() * 3; // Random animation delay

		return (
			<div
				key={index}
				className='bubble'
				style={{
					width: `${size}px`,
					height: `${size}px`,
					left: `${left}%`,
					animationDuration: `${duration}s`,
					animationDelay: `${delay}s`,
				}}
			></div>
		);
	});

	return <div className='bubbles'>{bubbles}</div>;
}

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center relative'>
			<Bubbles /> {/* Floating Bubbles Effect */}
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
