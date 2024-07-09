import "./App.scss";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="App dark">
			<NavBar />
			<Body />
		</div>
	);
}

export default App;
