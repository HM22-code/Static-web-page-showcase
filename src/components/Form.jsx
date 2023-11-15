import React from "react";

function Form() {
	return (
		<section
			data-aos="fade-up"
			data-aos-easing="linear"
			data-aos-duration="1500"
		>
			<div className="mb-5 ml-5 mr-5 mt-10 rounded-xl border border-slate-200 shadow-xl dark:bg-slate-800 dark:shadow-slate-800">
				<h3 className="mt-5 font-serif text-3xl dark:text-white">
					Vous souhaitez réserver?
				</h3>
				<h4 className="font-serif text-2xl dark:text-white">
					Contactez-nous
				</h4>
				<form method="post" className="m-10 flex flex-col p-5">
					<div className="flex flex-col justify-center md:flex-row">
						<input
							type="text"
							name="nom"
							placeholder="Entrer votre nom..."
							className="m-5 w-full"
							required
						/>
						<input
							type="text"
							name="prenom"
							placeholder="Entrer votre prénom..."
							className="m-5 w-full"
							required
						/>
					</div>
					<div className="flex flex-col justify-center md:flex-row">
						<input
							type="email"
							name="email"
							placeholder="Entrer votre email..."
							className="m-5 w-full"
							required
						/>
						<input
							type="tel"
							name="telephone"
							placeholder="Entrer votre numéro de téléphone..."
							className="m-5 w-full"
							required
						/>
					</div>
					<div className="flex flex-col justify-center md:flex-row">
						<input
							type="date"
							name="date"
							placeholder="Entrer le jour..."
							className="m-5 w-full"
							required
						/>
						<input
							type="time"
							name="time"
							placeholder="Entrer votre horaire..."
							className="m-5 w-full"
							required
						/>
					</div>
					<div className="m-5 flex flex-row">
						<input
							type="checkbox"
							name="lien"
							id="lien"
							value="lien"
							required
						/>
						<label className="flex flex-row dark:text-white">
							<div className="flex flex-col pl-2">
								<p className=" text-xs md:text-base">
									Accepter les
								</p>
								<p className="text-xs text-emerald-600 md:text-base">
									Mentions légales
								</p>
							</div>
						</label>
					</div>
					<div className="m-5 justify-center">
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
	);
}

export default Form;
