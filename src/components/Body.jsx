import React from "react";
import Banner from "./Banner";
import ScrollTopButton from "./ScrollTopButton";
import Home from "./Home";
import Parkour from "./Parkour";
import Price from "./Price";
import Contact from "./Contact";
import Form from "./Form";

function Body() {
	return (
		<div className="dark:bg-slate-900">
			<Banner />
			<Home />
			<Parkour />
			<Price />
			<Contact />
			<Form />
			<ScrollTopButton />
		</div>
	);
}

export default Body;
