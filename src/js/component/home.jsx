import React from "react";
import { Navbar } from "./Navbar"
import { Jumbotron } from "./Jumbotron"
import { Footer } from "./Footer"
import { Card } from "./Card"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="mb-4">
					<Jumbotron />
				</div>
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
