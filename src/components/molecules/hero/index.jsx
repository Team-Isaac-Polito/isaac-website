import React from "react";
import Button from "../../atoms/button";

export default function Hero(props) {
	return (
		<div className="bg-black h-[1095px] pt-52">
			<div className="m-auto text-center text-white w-fit ">
				<h3 className="text-[30px] w-[370px] m-auto">{props.subtitle}</h3>
				<h1 className="text-[70px] leading-[82px] font-semibold w-[590px] pt-10">
					{props.title}
				</h1>
				<div className="m-auto mt-16 w-fit">
					<Button text="Contattaci" isPrimary />
				</div>
			</div>
		</div>
	);
}
