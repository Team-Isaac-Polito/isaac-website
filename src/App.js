import "./global.css";
import Button from "./components/atoms/button";
import Title from "./components/atoms/title";
import Navbar from "./components/atoms/navbar";
import Hero from "./components/molecules/hero";
import Footer from "./components/atoms/footer";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Hero
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
			<Button text="Contattaci" isPrimary />
			<Button text="Contattaci" isYellow />
			<Button text="Contattaci" />
			{/* <Title className="font-extrabold text-7xl uppercase ml-[170px] my-5 text-yellow">
				Projects
			</Title>
			<p className="text-white w-[740px] text-[40px] ml-[170px] my-[46px] leading-[47px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
				laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
				Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
				nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
				ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat
				eu.
			</p>
			<Button
				text="Learn more"
				className="px-5 py-3 rounded-[20px] text-white font-semibold text-[40px] uppercase m-auto border-[5px] w-[450px] h-[90px] ml-[170px] border-yellow"
			/> */}
			{/* <Button
				text="Contattaci"
				className="bg-light-blue px-5 py-3 rounded-[10px] text-white font-extrabold text-[40px] uppercase m-auto"
			/> */}
		<Footer></Footer>
		</div>
	);
}

export default App;
