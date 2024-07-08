import React from "react";
import Banner from "./Banner";
import ScrollTopButton from "./ScrollTopButton";
import Home from "./Home";
import Parkour from "./Parkour";
import Price from "./Price";
import Contact from "./Contact";
import Footer from "./Footer"
import Container from "./Container"
import Blog from "./Blog"

function Body() {
	return (
		<div className="dark:bg-slate-900">
			<Banner/>
			<Home/>
			<Parkour/>
			<Container/>
			<Price/>
			<Blog/>
			<Contact/>
			<Footer/>
			<ScrollTopButton/>
		</div>
	);
}

export default Body;
