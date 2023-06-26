import React from "react";
import Banner from "./Banner";
import ScrollTopButton from "./ScrollTopButton";

function Body() {
	return (
		<div className="dark:bg-slate-900">
			<Banner />
			<section id="Accueil" className="pb-10">
				<div className="flex flex-col rounded-xl pt-10 shadow-xl dark:bg-slate-800 dark:shadow-slate-800 md:flex-row">
					<div className="flex flex-col justify-around p-10">
						<h1 className="font-serif text-3xl dark:text-white">
							Venez vous amuser sur notre site d'accrobranche!
						</h1>
						<h2 className="font-serif text-xl dark:text-white">
							+ de 35 parcours!
						</h2>
						<p className="text-justify text-base dark:text-white">
							Avec nos 50 tyroliennes dont 3 géantes de plus de
							500 mètres, affrontez vos peurs et sautez dans le
							vide! Des parcours avec des niveaux de difficulté
							allant de blanc à noir, des parcours d'1 mètre à 25
							mètres de hauteur, il y en a pour tout le monde
							notamment grâce à une partie enfant et une partie
							adulte!
						</p>
					</div>
					<img
						className="w-px-100 h-80 rounded-r-xl"
						loading="lazy"
						src="./assets/img/home.jpg"
						alt="Home"
					/>
				</div>
			</section>
			<section id="Parcours">
				<div className="">
					<h1 className="border border-emerald-600 font-serif text-3xl text-slate-900 shadow shadow-emerald-600 dark:text-white">
						🍃Parcours🍃
					</h1>
					<div className="flex flex-col justify-evenly md:flex-row">
						<div className="m-5 h-full w-full rounded-xl p-5 shadow-xl dark:bg-slate-800 dark:shadow-slate-800">
							<h3 className="dark:text-white">Partie enfant</h3>
							<p className="dark:text-white">
								✓ Dès 3 ans (jusqu'à 12 ans)
							</p>
							<p className="dark:text-white">
								✓ 1,5km de parcours de 1 à 8 mètres de hauteur
							</p>
							<p className="dark:text-white">
								✓ 500 mètres de tyrolienne
							</p>
							<p className="dark:text-white">✓ 16 parcours</p>
							<p className="dark:text-white">
								✓ 3 niveaux (blanc-vert-bleu)
							</p>
							<p className="dark:text-white">✓ 10 tyroliennes</p>
						</div>
						<div className="m-5 h-full w-full rounded-xl p-5 shadow-xl dark:bg-slate-800 dark:shadow-slate-800">
							<h3 className="dark:text-white">
								Partie ado/adulte
							</h3>
							<p className="dark:text-white">
								✓ Adolescents et adultes (dès 10 ans)
							</p>
							<p className="dark:text-white">
								✓ 6km de parcours de 3 à 25 mètres de hauteur
							</p>
							<p className="dark:text-white">
								✓ 2km de tyrolienne
							</p>
							<p className="dark:text-white">✓ 21 parcours</p>
							<p className="dark:text-white">
								✓ 4 niveaux (vert-bleu-rouge-noir)
							</p>
							<p className="dark:text-white">✓ 40 tyroliennes</p>
						</div>
					</div>
				</div>
			</section>
			<section id="Tarifs">
				<div className="">
					<h1 className="border border-emerald-600 font-serif text-3xl text-slate-900 shadow shadow-emerald-600 dark:text-white">
						🍃Tarifs & Réservation🍃
					</h1>
					<div className="m-5 flex flex-col rounded-xl shadow-xl dark:bg-slate-800 dark:shadow-slate-800 md:flex-row">
						<img
							className="w-px-100 h-80 rounded-l-xl"
							loading="lazy"
							src="./assets/img/parkour.jpg"
							alt="Parkour"
						/>
						<table className="h-full w-full">
							<tr>
								<th className="dark:text-white">Forfaits</th>
								<th className="dark:text-white">Description</th>
								<th className="dark:text-white">Prix</th>
							</tr>
							<tr>
								<td className="dark:text-white">Enfant</td>
								<td>
									<p className="dark:text-white">
										✓ Dès 3 ans (jusqu'à 12 ans)
									</p>
									<p className="dark:text-white">
										✓ 1,5km de parcours de 1 à 8 mètres de
										hauteur
									</p>
									<p className="dark:text-white">
										✓ 500 mètres de tyrolienne
									</p>
									<p className="dark:text-white">
										✓ 16 parcours
									</p>
									<p className="dark:text-white">
										✓ 3 niveaux (blanc-vert-bleu)
									</p>
									<p className="dark:text-white">
										✓ 10 tyroliennes
									</p>
								</td>
								<td className="dark:text-white">8€</td>
							</tr>
							<tr>
								<td className="dark:text-white">Ado/Adulte</td>
								<td>
									<p className="dark:text-white">
										✓ Adolescents et adultes (dès 10 ans)
									</p>
									<p className="dark:text-white">
										✓ 6km de parcours de 3 à 25 mètres de
										hauteur
									</p>
									<p className="dark:text-white">
										✓ 2km de tyrolienne
									</p>
									<p className="dark:text-white">
										✓ 21 parcours
									</p>
									<p className="dark:text-white">
										✓ 4 niveaux (vert-bleu-rouge-noir)
									</p>
									<p className="dark:text-white">
										✓ 40 tyroliennes
									</p>
								</td>
								<td className="dark:text-white">14€</td>
							</tr>
						</table>
					</div>
				</div>
			</section>
			<section id="Horaires">
				<div className="">
					<h1 className="border border-emerald-600 font-serif text-3xl text-slate-900 shadow shadow-emerald-600 dark:text-white">
						🍃Horaires🍃
					</h1>

					<div className="m-5 rounded-xl shadow-xl dark:bg-slate-800 dark:shadow-slate-800">
						<p className="text-justify dark:text-white">
							Nous sommes ouverts toute l'année, du Lundi au
							Dimanche (hormis de Novembre à Février) selon les
							horaires suivants :
						</p>
						<p className="text-justify dark:text-white">
							- Du Lundi au Vendredi : de 10h à 19h
						</p>
						<p className="text-justify dark:text-white">
							- Le week-end de 10h à 21h
						</p>
					</div>
				</div>
			</section>
			<section id="Contact">
				<div className="">
					<h1 className="border border-emerald-600 font-serif text-3xl text-slate-900 shadow shadow-emerald-600 dark:text-white">
						🍃Contact🍃
					</h1>
					<div className="m-5 flex flex-col rounded-xl shadow-xl dark:bg-slate-800 dark:shadow-slate-800 md:flex-row">
						<div className="">
							<h2 className="dark:text-white">Adresse</h2>
							<p className="dark:text-white">
								Venez nous rejoindre dans le cadre idyllique au
								sein du parc naturel régional du Morvan.
							</p>
							<p className="dark:text-white">
								Nous nous situons au bord de l'étang Taureau, à
								quelques mètres du centre de la commune de
								Saint-Brisson, un petit village au coeur du
								Morvan.
							</p>
							<h2 className="dark:text-white">Email</h2>
							<p className="dark:text-white">
								accrofun@gmail.com
							</p>
							<h2 className="dark:text-white">Téléphone</h2>
							<p className="dark:text-white">09 08 07 06 05</p>
						</div>
						<div className="dark:text-white">
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
					</div>
				</div>
			</section>
			<section>
				<div className="ml-5 mr-5 mt-10 rounded-xl shadow-xl dark:bg-slate-800 dark:shadow-slate-800">
					<h3 className="font-serif text-3xl dark:text-white">
						Vous souhaitez réserver?
					</h3>
					<h4 className="font-serif text-2xl dark:text-white">
						Contactez-nous
					</h4>
					<form method="post" className="m-10 flex flex-col">
						<div className="flex flex-row justify-center">
							<input
								type="text"
								name="nom"
								placeholder="Entrer votre nom..."
								className="w-full"
								required
							/>
							<input
								type="text"
								name="prenom"
								placeholder="Entrer votre prénom..."
								className="w-full"
								required
							/>
						</div>
						<div className="flex flex-row justify-center">
							<input
								type="email"
								name="email"
								placeholder="Entrer votre email..."
								className="w-full"
								required
							/>
							<input
								type="tel"
								name="telephone"
								placeholder="Entrer votre numéro de téléphone..."
								className="w-full"
								required
							/>
						</div>
						<div className="flex flex-row justify-center">
							<input
								type="date"
								name="date"
								placeholder="Entrer le jour..."
								className="w-full"
								required
							/>
							<input
								type="time"
								name="time"
								placeholder="Entrer votre horaire..."
								className="w-full"
								required
							/>
						</div>
						<div className="flex flex-row">
							<input
								type="checkbox"
								name="lien"
								id="lien"
								value="lien"
								required
							/>
							<label className="flex flex-row dark:text-white">
								<p className="pl-2">Accepter les</p>
								<p className="pl-1 text-emerald-600">
									Mentions légales
								</p>
							</label>
						</div>
						<div className="justify-center">
							<button
								className="w-20 rounded-md bg-emerald-600 text-white dark:text-white"
								type="submit"
							>
								Réserver
							</button>
						</div>
					</form>
				</div>
			</section>
			<ScrollTopButton />
		</div>
	);
}

export default Body;
