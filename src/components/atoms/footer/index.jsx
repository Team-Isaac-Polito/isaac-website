import React from "react";
import {ReactComponent as Mail} from "../../../assets/svg/envelope.svg";
import {ReactComponent as Segnaposto} from "../../../assets/svg/geo-alt-fill.svg";
import {ReactComponent as Instagram} from "../../../assets/svg/instagram.svg";
import {ReactComponent as LinkedIn} from "../../../assets/svg/linkedin.svg";
import {ReactComponent as Logo} from "../../../assets/svg/logo.svg";

export default function Footer(props) {
	return (
		<footer className="grid grid-rows-2 font-Raleway text-[20px] h-[500px] bg-dark-blue w-full text-white">
			<div className="grid grid-cols-3 mx-[175px] my-[70px]" >
				<div className="grid grid-rows-2">

					<div>
						<Logo className="" />
					</div>

					<div className="flex flex-rows h-[150px]">
						<a href=""><Instagram className="w-[40px] h-[40px] mx-[10px]" /></a>
						<a href=""><LinkedIn className="w-[40px] h-[40px] mx-[10px]" /></a>
						<a href=""> <Mail className="w-[40px] h-[40px] mx-[10px]" /></a>	
					</div>

				</div>


				<div className="grid grid-cols-2">
					<div>
						<h5 className="text-light-blue">Home</h5><br/>						
						<a href="">About</a><br/>
						<a href="">Progetti</a><br/>
						<a href="">Eventi</a><br/>
						<a href="">I nostri numeri</a><br/>
						<a href="">Sponsor</a>				
					</div>

					<div>
						<h5 className="text-light-blue">About</h5><br/>
						<a href="">Mission</a><br/>
						<a href="">Team</a><br/>
						<a href="">Storia</a><br/>
						<a href="">Timeline</a>		
					</div>
				</div>

				<div className="grid grid-cols-2">

					<div>
						<h5 className="text-light-blue">Progetti</h5><br/>	
						<a href="">Rase.Q</a>	
					</div>

					<div>
						<h5 className="text-light-blue">Eventi</h5><br/>
						<a href="">Maker Faire 2022</a><br/>
						<a href="">A&T 2023</a>	
					</div>
				</div>

			</div>

			<div className="grid grid-cols-3 mx-[175px] my-[120px]">

				<div className="flex flex-rows">
					<a href=""><Segnaposto className="my-[10px] mx-[3px] w-[40px] h-[40px]"/> </a>
					<div>
						<h6>DIMEAS Politecnico di Torino</h6>
						<h6>Corso Duca degli Abruzzi, 24, 10129 Torino TO</h6>
					</div>
				</div>

				<div></div>

				<div>
					<h6 className="text-right">© Team ISAAC Polito. All Rights Reserved</h6>
				</div>

			</div>
            
        </footer>
	);
}