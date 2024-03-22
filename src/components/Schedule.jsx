import React from "react";

function Schedule() {
	return (
		<section
			id="Horaires"
			data-aos="fade-up"
			data-aos-easing="linear"
			data-aos-duration="1500"
		>
			<div className="">
				<span className="flex items-center">
					<span className="h-px flex-1 bg-black"></span>
					<span className="shrink-0 px-6">Horaires</span>
					<span className="h-px flex-1 bg-black"></span>
				</span>
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
