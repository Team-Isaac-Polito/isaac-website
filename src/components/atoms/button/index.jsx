import React from "react";

export default function Button(props) {
	return (
		<div className="w-fit m-auto">
			<button className={props.className}>{props.text}</button>
		</div>
	);
}
