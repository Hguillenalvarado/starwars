import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Image } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export const NavbarMenu = () => {
	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image
						scr="data:image/png;base64,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"
						height="40"
						alt="Star Wars"
					/>
				</Link>
			</Navbar.Brand>
		</Navbar>
		//<nav className="navbar navbar-light bg-light mb-3">
		//	<Link to="/">
		//		<span className="navbar-brand mb-0 h1">Home</span>
		//	</Link>
		//	<div className="ml-auto">
		//		<Link to="/demo">
		//			<button className="btn btn-primary">Check the Context in action</button>
		//		</Link>
		//	</div>
		//</nav>
	);
};
