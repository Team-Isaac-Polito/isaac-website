import React from "react";

export default function Navbar(props) {
	return (
	<>
		<nav className="flex-row flex items-center w-fit m-auto font-Staatliches">
			<div className="text-white m-[20px] text-5xl"><a href="">HOME</a></div>
			<div className="text-white m-[20px] text-5xl"><a href="">ABOUT</a></div>
			<div className="text-white m-[20px] text-5xl"><a href="">PROGETTI</a></div>
			<div className="text-white uppercase m-[20px] text-5xl"><a href="">eventi</a></div>
		</nav>
		<div className="text-white w-fit absolute right-5 mr-5 flex flez-row"> <div className="m-20[px]">ITA</div> <div className="w-[3px] bg-white"/> <div className="m-20[px]">ENG</div> </div>
	</>
	);

}