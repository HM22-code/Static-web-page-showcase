import React from "react";

function Home() {
	return (
		<section
			id="Accueil"
			className=""
		>
			<div class="bg-wood-bark-dark relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
				<div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
					<div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2a4120] to-[#cadb3a] opacity-20" ></div>
				</div>
				<div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
					<div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2a4120] to-[#cadb3a] opacity-20" ></div>
				</div>
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl lg:mx-0">
						<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Parcours</h2>
						<p class="mt-6 text-lg leading-8 text-gray-300">Avec nos 50 tyroliennes dont 3 géantes de plus de 500 mètres, affrontez vos peurs et sautez dans le vide ! Des parcours avec divers niveaux de difficulté, des parcours d'1 mètre à 25 mètres de hauteur, il y en a pour tout le monde notamment grâce à une partie enfant et une partie adulte !</p>
					</div>
					<div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
							<div class="flex flex-col-reverse">
								<dt class="text-base leading-7 text-gray-300">Parcours</dt>
								<dd class="text-2xl font-bold leading-9 tracking-tight text-white">50</dd>
							</div>
							<div class="flex flex-col-reverse">
								<dt class="text-base leading-7 text-gray-300">Ateliers</dt>
								<dd class="text-2xl font-bold leading-9 tracking-tight text-white">70</dd>
							</div>
							<div class="flex flex-col-reverse">
								<dt class="text-base leading-7 text-gray-300">Niveaux</dt>
								<dd class="text-2xl font-bold leading-9 tracking-tight text-white">3</dd>
							</div>
							<div class="flex flex-col-reverse">
								<dt class="text-base leading-7 text-gray-300">Forfaits journaliers</dt>
								<dd class="text-2xl font-bold leading-9 tracking-tight text-white">Accès illimité</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
