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
import Info from "./Info"

function Body() {
	return (
		<div className="dark:bg-slate-900">
			<Banner/>
			<Home/>
			<Info/>
			<Container/>
			<Parkour/>
			<Price/>
			<Blog/>
			<Contact/>
			<Footer/>
			<ScrollTopButton/>
		</div>
	);
}

export default Body;
