import React from "react";

function NavBar() {
	return (
		<header className="border-b-2 border-slate-200 bg-white dark:bg-slate-800">
			<nav className="mx-auto flex max-w-7xl flex-col items-center justify-between p-6 md:flex-row lg:px-8">
				<h1 className="font-serif text-3xl text-slate-900 dark:text-white">
					Accro'Fun
				</h1>
				<div className="mx-auto flex flex-col justify-around gap-x-10 md:flex-row ">
					<a
						className="border-b border-solid border-slate-900 text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white"
						href="#Accueil"
					>
						Accueil
					</a>
					<a
						className="border-b border-solid border-slate-900 text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white"
						href="#Parcours"
					>
						Parcours
					</a>
					<a
						className="border-b border-solid border-slate-900 text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white"
						href="#Tarifs"
					>
						Tarifs & Réservation
					</a>
					<a
						className="border-b border-solid border-slate-900 text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white"
						href="#Horaires"
					>
						Horaires
					</a>
					<a
						className="border-b border-solid border-slate-900 text-slate-900 hover:border-emerald-600 hover:text-emerald-600 dark:border-white dark:text-white"
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
