import React from "react";

export default function Diagonal(props) {
	return props.isTopDown ? (
        <div>
        <svg width="1920" height="153" viewBox="0 0 1920 153" className={props.secondColor}>
        <path d="M0 153H1920L0 0V153Z" />
        </svg>
        <div className="mt-[-153px] z-2">
        <svg width="1920" height="153" viewBox="0 0 1920 153" className={props.firstColor}>
        <path d="M1920 0H0L1920 153V0Z" />
        </svg></div></div>
    
    ) :
    (
        <div>
        <svg width="1920" height="153" viewBox="0 0 1920 153" className={props.secondColor}>
        <path d="M1920 153H0L1920 0V153Z" />
        </svg>
        <div className="mt-[-153px] z-2">
        <svg width="1920" height="153" viewBox="0 0 1920 153" className={props.firstColor}>
        <path d="M0 0H1920L0 153V0Z" />
        </svg></div></div>

    );
    }