import React from "react";

export default function Navbar(props) {
	return (
		<div className="w-fit">
			<button className={props.className}>{props.text}</button>
		</div>
	);
}