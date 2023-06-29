import React from "react";

function Contact() {
	return (
		<section id="Contact">
			<div className="">
				<h1 className="border-y border-emerald-600 font-serif text-xl  text-slate-900 shadow shadow-emerald-600 dark:text-white sm:text-3xl">
					🍃 Contact 🍃
				</h1>
				<div className="m-5 flex flex-col rounded-xl border border-slate-200 shadow-xl dark:bg-slate-800 dark:shadow-slate-800 md:flex-row">
					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16460.89380939658!2d4.100411825758484!3d47.27124466924508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1687766276487!5m2!1sfr!2sfr"
							width="400"
							height="300"
							title="carte"
							className="b-0 hidden md:flex"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className="p-5">
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
