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
        </svg></div>
        {props.isEnd? (<div className="z-2 mt-[-120px]"><svg width="1920" height="161" viewBox="0 0 1920 161" fill="none" className={props.lineColor}>
                        <path d="M1921.5 5L-1.5 156" stroke="#1B1D44" stroke-width="10"/></svg></div>):""}
        </div>
    
    ) :
    (
        <div>
        <svg width="1920" height="153" viewBox="0 0 1920 153" className={props.secondColor}>
        <path d="M1920 153H0L1920 0V153Z" />
        </svg>
        <div className="mt-[-153px] z-2">
        <svg width="1920" height="153" viewBox="0 0 1920 153" className={props.firstColor}>
        <path d="M0 0H1920L0 153V0Z" />
        </svg></div>
        {props.isEnd? (<div className="bg-white z-2 mt-[-120px]"><svg width="1920" height="161" viewBox="0 0 1920 161" fill="none" className={props.lineColor}>
                        <path d="M1921.5 5L-1.5 156" stroke="#1B1D44" stroke-width="10"/></svg></div>):""}
        </div>

    );
    }