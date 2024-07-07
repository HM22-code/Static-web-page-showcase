import React from "react";
import leaf from "../assets/img/leaf.png";

function NavBar() {
	return (
		<header className="border-b-2 border-slate-200 bg-white dark:border-slate-600 dark:bg-slate-800">
			<nav className="mx-auto flex max-w-7xl flex-col items-center justify-between p-6 md:flex-row lg:px-8">
				<h1 className="flex flex-row justify-between pb-0 align-middle font-serif text-3xl text-slate-900 dark:text-white sm:pb-4 md:pb-0">
					<img
						className="h-10 w-10 rounded-l-xl object-cover pr-2"
						loading="lazy"
						src={leaf}
						alt="Leaf" /> Accro'Fun
				</h1>
				<div className="mx-auto hidden flex-col justify-center gap-x-5 text-base sm:visible sm:flex sm:flex-row sm:gap-y-2 sm:text-sm md:text-base  lg:gap-x-10">
					<a
						className="text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white sm:border-b sm:border-solid sm:border-slate-900 dark:sm:border-white"
						href="#Accueil"
					>
						Accueil
					</a>
					<a
						className="text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white sm:border-b sm:border-solid sm:border-slate-900 dark:sm:border-white"
						href="#Parcours"
					>
						Parcours
					</a>
					<a
						className="text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white sm:border-b sm:border-solid sm:border-slate-900 dark:sm:border-white"
						href="#Tarifs"
					>
						Tarifs & Réservation
					</a>
					<a
						className="text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white sm:border-b sm:border-solid sm:border-slate-900 dark:sm:border-white"
						href="#Horaires"
					>
						Horaires
					</a>
					<a
						className="text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white sm:border-b sm:border-solid sm:border-slate-900 dark:sm:border-white"
						href="#Contact"
					>
						Contact
					</a>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
