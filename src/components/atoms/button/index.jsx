import React from "react";

export default function Button(props) {
	return props.isPrimary ? (
		<div>
			<button className="bg-light-blue px-5 py-3 rounded-[10px] text-white font-extrabold text-[40px] uppercase m-auto">
				{props.text}
			</button>
		</div>
	) : props.isYellow ? (
		<div className="w-fit">
			<button className="px-5 py-3 rounded-[20px] text-white font-semibold text-[40px] uppercase m-auto border-[5px] w-[450px] h-[90px] border-yellow">
				{props.text}
			</button>
		</div>
	) : (
		<div className="w-fit">
			<button className="px-5 py-3 rounded-[20px] text-dark-blue font-semibold text-[40px] uppercase m-auto border-[5px] w-[450px] h-[90px] border-light-blue">
				{props.text}
			</button>
		</div>
	);
}
