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
						alt="home"
					/>
				</div>
			</section>
			<hr />
			<section id="Parcours">
				<div className="">
					<h1 className="font-serif text-3xl text-slate-900 dark:text-white">
						Parcours
					</h1>
					<div className="m-10 flex flex-col justify-evenly md:flex-row">
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
			<hr />
			<section id="Tarifs">
				<div className="">
					<h1 className="font-serif text-3xl text-slate-900 dark:text-white">
						Tarifs & Réservation
					</h1>
					<div className="m-10 flex flex-col rounded-xl shadow-xl dark:bg-slate-800 dark:shadow-slate-800 md:flex-row">
						<img
							className="rounded-l-xl"
							loading="lazy"
							src="./assets/img/parkour.jpg"
							alt="parkour"
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
			<hr />
			<section id="Horaires">
				<div className="">
					<h1 className="font-serif text-3xl text-slate-900 dark:text-white">
						Horaires
					</h1>

					<div className="m-10 rounded-xl shadow-xl dark:bg-slate-800 dark:shadow-slate-800">
						<p className="dark:text-white">
							Nous sommes ouverts toute l'année, du Lundi au
							Dimanche (hormis de Novembre à Février) selon les
							horaires suivants :
						</p>
						<p className="dark:text-white">
							- Du Lundi au Vendredi : de 10h à 19h
						</p>
						<p className="dark:text-white">
							- Le week-end de 10h à 21h
						</p>
					</div>
				</div>
			</section>
			<hr />
			<section id="Contact">
				<div className="">
					<h1 className="font-serif text-3xl text-slate-900 dark:text-white">
						Contact
					</h1>
					<div className="m-10 rounded-xl shadow-xl dark:bg-slate-800 dark:shadow-slate-800">
						<div className="dark:text-white">Carte</div>
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
					</div>
				</div>
			</section>
			<hr />
			<section>
				<div className="ml-10 mr-10 mt-10 rounded-xl shadow-xl dark:bg-slate-800 dark:shadow-slate-800">
					<h3 className="font-serif text-3xl dark:text-white">
						Vous souhaitez réserver?
					</h3>
					<h4 className="font-serif text-2xl dark:text-white">
						Contactez-nous
					</h4>
					<form method="post">
						<input
							type="text"
							name="nom"
							placeholder="Entrer votre nom..."
							required
						/>
						<input
							type="text"
							name="prenom"
							placeholder="Entrer votre prénom..."
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Entrer votre email..."
							required
						/>
						<input
							type="tel"
							name="telephone"
							placeholder="Entrer votre numéro de téléphone..."
							required
						/>
						<input
							type="date"
							name="date"
							placeholder="Entrer le jour..."
							required
						/>
						<input
							type="time"
							name="time"
							placeholder="Entrer votre horaire..."
							required
						/>
						<div class="lien">
							<input
								type="checkbox"
								name="lien"
								id="lien"
								value="lien"
								required
							/>
							<label className="dark:text-white">
								Accepter les
								<p className="text-emerald-600">
									Mentions légales
								</p>
							</label>
						</div>
						<button className="dark:text-white" type="submit">
							Réserver
						</button>
					</form>
				</div>
			</section>
			<ScrollTopButton />
		</div>
	);
}

export default Body;
