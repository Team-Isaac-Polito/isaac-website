import "./global.css";
import Button from "./components/atoms/button";

function App() {
	return (
		<div className="App">
			<Button
				text="Contattaci"
				className="bg-light-blue px-5 py-3 rounded-[10px] text-white font-extrabold text-[40px] uppercase m-auto"
			/>
		</div>
	);
}

export default App;
