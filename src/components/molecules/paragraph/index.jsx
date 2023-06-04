import React from "react";
import Button from "../../atoms/button";
import Diagonal from "../../atoms/diagonal";
import Frame from "../../atoms/frame";
import Title from "../../atoms/title";

export default function Paragraph(props) {
	return (
		<div classname="w-full">
			<Diagonal firstColor="fill-white" secondColor="fill-dark-blue"/>
			<div className="grid grid-cols-2 w-full text-white py-[100px] bg-dark-blue h-fit">
				<div className=" ml-[150px] mt-0 w-fit h-fit">
					<Title className="text-yellow">{props.title}</Title>
					<div className="my-10">{props.text}</div>
					<Button text="Learn more" isYellow/>
				</div>
				<div className="m-auto w-full h-fit pl-24">
					<div className="z-0 bg-gray-500 h-[666px] w-[547px] rounded-md ml-[55px]"></div>
					<Frame color="stroke-yellow"/>
				</div>
			</div>
		</div>
	);
}