import React from "react";
import parkour from "../assets/img/parkour.jpg";

function Contact() {
	return (
		<section
			id="Contact"
			data-aos="fade-up"
			data-aos-easing="linear"
			data-aos-duration="1500"
		>
			<div className="">
				<span className="flex items-center">
					<span className="h-px flex-1 bg-black"></span>
					<span className="shrink-0 px-6">Contact</span>
					<span className="h-px flex-1 bg-black"></span>
				</span>
				<div className="m-5 flex flex-col rounded-xl border border-slate-200 shadow-xl dark:bg-slate-800 dark:shadow-slate-800 md:flex-row">
					<div>
						<img
							src={parkour}
							alt="Parkour"
							className="h-80 w-full object-cover"
						/>
					</div>
					<div className="p-5">
						<h2 className="text-justify text-xl underline dark:text-white">
							Horaires
						</h2>
						<p className="text-justify text-base dark:text-white">
							Nous sommes ouverts toute l'année, du Lundi au Dimanche
							(hormis de Novembre à Février) selon les horaires
							suivants :
						</p>
						<p className="text-justify text-base dark:text-white">
							- Du Lundi au Vendredi : de 10h à 19h
						</p>
						<p className="text-justify text-base dark:text-white">
							- Le week-end de 10h à 21h
						</p>
						<h2 className="text-justify text-xl underline dark:text-white">
							Adresse
						</h2>
						<p className="text-justify text-base dark:text-white">
							Venez nous rejoindre dans le cadre idyllique au sein
							du parc naturel régional du Morvan. Nous nous
							situons au bord de l'étang Taureau, à quelques
							mètres du centre de la commune de Saint-Brisson, un
							petit village au coeur du Morvan.
						</p>
						<h2 className="text-justify text-xl underline dark:text-white">
							Email
						</h2>
						<a
							className="flex text-justify text-base"
							href="mailto:accrofun@gmail.com"
						>
							accrofun@gmail.com
						</a>
						<h2 className="text-justify text-xl underline dark:text-white">
							Téléphone
						</h2>
						<a
							className="flex text-justify text-base"
							href="tel:+33908070605"
						>
							09 08 07 06 05
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
