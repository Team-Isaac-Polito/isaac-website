import "./global.css";
import Button from "./components/atoms/button";
import Title from "./components/atoms/title";
import Navbar from "./components/atoms/navbar";
import Hero from "./components/molecules/hero";
import Paragraph from "./components/molecules/paragraph";
import Diagonal from "./components/atoms/diagonal";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Hero
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
			<div className="w-full bg-white text-dark-blue h-fit">
				<Diagonal  isTopDown secondColor="fill-white" firstColor="fill-black"/>
				<Title className="m-auto text-center mb-10">About us</Title>
				<div className="m-auto w-[1520px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. </div>
				<div className="flex flex-row m-auto py-20 items-center w-fit">
					<div className="w-[262px] h-[263px] bg-gray-400 rounded-[10px] mx-10">.</div>
					<div className="w-[262px] h-[263px] bg-gray-400 rounded-[10px] mx-10">.</div>
					<div className="w-[262px] h-[263px] bg-gray-400 rounded-[10px] mx-10">.</div>
				</div>
			</div>
			<Paragraph
				title="Progetti"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
			/>
			<Diagonal isEnd firstColor="fill-dark-blue" secondColor="fill-white" lineColor="stroke-dark-blue"/>
		</div>
	);
}

export default App;
