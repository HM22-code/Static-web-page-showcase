import React from "react";

function Price() {
	return (
		<section
			id="Tarifs"
			data-aos="fade-up"
			data-aos-easing="linear"
			data-aos-duration="1500"
		>
			<div className="">
				<h1 className="border-y border-emerald-600 font-serif text-xl text-slate-900 shadow shadow-emerald-600 dark:text-white sm:text-3xl">
					🍃 Tarifs & Réservation 🍃
				</h1>
				<div className="m-5 flex flex-col border border-slate-200 shadow-xl dark:bg-slate-800 dark:shadow-slate-800 md:flex-row">
					<div className="h-full w-full">
						<table className="h-full w-full border border-slate-300">
							<tr className="border border-slate-300">
								<th className="border border-slate-300 dark:text-white">
									Forfaits
								</th>
								<th className="border border-slate-300 dark:text-white">
									Description
								</th>
								<th className="border border-slate-300 dark:text-white">
									Prix
								</th>
							</tr>
							<tr className="border border-slate-300">
								<td className="border border-slate-300 dark:text-white">
									Enfant
								</td>
								<td className="border border-slate-300">
									<p className="text-justify text-base dark:text-white">
										✓ Dès 3 ans (jusqu'à 12 ans)
									</p>
									<p className="text-justify text-base dark:text-white">
										✓ 1,5km de parcours de 1 à 8 mètres de
										hauteur
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
								</td>
								<td className="border border-slate-300 dark:text-white">
									8€
								</td>
							</tr>
							<tr className="border border-slate-300">
								<td className="border border-slate-300 dark:text-white">
									Ado/Adulte
								</td>
								<td className="border border-slate-300">
									<p className="text-justify text-base dark:text-white">
										✓ Adolescents et adultes (dès 10 ans)
									</p>
									<p className="text-justify text-base dark:text-white">
										✓ 6km de parcours de 3 à 25 mètres de
										hauteur
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
								</td>
								<td className="border border-slate-300 dark:text-white">
									14€
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Price;
