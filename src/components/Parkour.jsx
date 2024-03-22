import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Parkour() {
	return (
		<section
			id="Parcours"
			data-aos="fade-up"
			data-aos-easing="linear"
			data-aos-duration="1500"
		>
			<div className="">
				<div className="flex flex-col justify-center p-5 align-middle">
					<Carousel className="h-full w-full" dynamicHeight>
						<div>
							<img
								src="assets/img/parkour.jpg"
								alt="Parkour"
								className="h-full w-full object-cover"
							/>
						</div>
						<div>
							<img
								src="assets/img/zipline.jpg"
								alt="Zipline"
								className="h-full w-full object-cover"
							/>
						</div>
						<div>
							<img
								src="assets/img/home.jpg"
								alt="Home"
								className="h-full w-full object-cover"
							/>
						</div>
					</Carousel>
				</div>
				<span className="flex items-center">
					<span className="h-px flex-1 bg-black"></span>
					<span className="shrink-0 px-6">Parcours</span>
					<span className="h-px flex-1 bg-black"></span>
				</span>
				<div className="flex flex-col space-y-5 p-5 md:flex-row">
					<div className="h-full w-full rounded-xl border border-slate-200 p-5 shadow-xl dark:bg-slate-800 dark:shadow-slate-800 md:m-5">
						<h3 className="pb-2 text-xl underline dark:text-white">
							Partie enfant
						</h3>
						<p className="text-justify text-base dark:text-white">
							✓ Dès 3 ans (jusqu'à 12 ans)
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 1,5km de parcours de 1 à 8 mètres de hauteur
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 500 mètres de tyrolienne
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 16 parcours
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 3 niveaux (blanc-vert-bleu)
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 10 tyroliennes
						</p>
					</div>
					<div className="h-full w-full rounded-xl border border-slate-200 p-5 shadow-xl dark:bg-slate-800 dark:shadow-slate-800 md:m-5">
						<h3 className="pb-2 text-xl underline dark:text-white">
							Partie ado/adulte
						</h3>
						<p className="text-justify text-base dark:text-white">
							✓ Adolescents et adultes (dès 10 ans)
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 6km de parcours de 3 à 25 mètres de hauteur
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 2km de tyrolienne
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 21 parcours
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 4 niveaux (vert-bleu-rouge-noir)
						</p>
						<p className="text-justify text-base dark:text-white">
							✓ 40 tyroliennes
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Parkour;
