import "./global.css";
import Button from "./components/atoms/button";
import Title from "./components/atoms/title";
import Navbar from "./components/atoms/navbar";
import Hero from "./components/molecules/hero";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Hero
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
		</div>
	);
}

export default App;
