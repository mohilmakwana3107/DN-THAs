import "./styles.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./Components/Profile";
import MyCart from "./Components/MyCart";
import Home from "./Components/Home";
import { useState } from "react";

export default function App() {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<Router>
			<div className="nav">
				<Link to="/" className="spc">
					Home
				</Link>
				<Link to="/profile" className="spc">
					Profile
				</Link>
				<Link to="/mycart" className="spc">
					My Cart
				</Link>

				<button
					className="bnn mrgn"
					onClick={() => {
						setIsAuth(true);
					}}
				>
					Login
				</button>
				<button
					className="bnn mrgn2"
					onClick={() => {
						setIsAuth(false);
					}}
				>
					Logout
				</button>
			</div>

			<div className="card">
				<Switch exact>
					<Route exact path="/" component={Home}></Route>
					<ProtectedRoute
						exact
						path="/profile"
						component={Profile}
						isAuth={isAuth}
					/>
					<ProtectedRoute
						exact
						path="/mycart"
						component={MyCart}
						isAuth={isAuth}
					/>
				</Switch>
			</div>
		</Router>
	);
}
