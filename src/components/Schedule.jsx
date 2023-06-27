import React from "react";

function Schedule() {
	return (
		<section id="Horaires">
			<div className="">
				<h1 className="border-y border-emerald-600 font-serif text-xl  text-slate-900 shadow shadow-emerald-600 dark:text-white sm:text-3xl">
					🍃Horaires🍃
				</h1>

				<div className="m-5 flex flex-col rounded-xl border border-slate-200 p-5 shadow-xl dark:bg-slate-800 dark:shadow-slate-800">
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
				</div>
			</div>
		</section>
	);
}

export default Schedule;
