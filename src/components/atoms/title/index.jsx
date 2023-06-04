import React from "react";

export default function Title(props) {
	return (
		<div className={props.className}>
		<h1 className="text-[60px] uppercase font-extrabold">
            {props.children}
        </h1></div>
	);
}
