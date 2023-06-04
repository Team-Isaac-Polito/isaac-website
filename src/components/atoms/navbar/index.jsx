import React from "react";
import Logo from "../../../assets/logo.svg";

export default function Navbar(props) {
	return (
		<div className="grid grid-cols-3 font-Staatliches h-[130px] bg-dark-blue z-10 w-full">
			<img src={Logo} alt="Logo" className="m-auto ml-28 h-[80px]" />
			<nav className="flex flex-row items-center m-auto w-fit text-5xl uppercase">
				<div className="text-white m-[20px] active:text-yellow">
					<a href="/">HOME</a>
				</div>
				<div className="text-white m-[20px]">
					<a href="/about">ABOUT</a>
				</div>
				<div className="text-white m-[20px]">
					<a href="/progetti">PROGETTI</a>
				</div>
				<div className="text-white m-[20px]">
					<a href="/eventi">eventi</a>
				</div>
			</nav>
			<div className="flex flex-row text-white w-fit text-[40px] absolute right-28 mt-8">
				{" "}
				<div className="m-20[px]">
					<a href="">ITA</a>
				</div>{" "}
				<div className="w-[5px] bg-white mx-3" />{" "}
				<div className="m-20[px]">
					{" "}
					<a href="">ENG</a>
				</div>{" "}
			</div>
		</div>
	);
}
