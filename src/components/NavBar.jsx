import React from "react";
import leaf from "../assets/img/leaf.png";

function NavBar() {
	return (
		<div class="bg-zipline">
			<div className="bg-zipline blur-sm"></div>
			<header class="absolute inset-x-0 top-0 z-50">
				<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
					<div class="flex lg:flex-1">
						<a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
							<img src={leaf} class="h-8" alt="Acro'Fun Logo"/>
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Acro'Fun</span>
						</a>
					</div>
					<div class="hidden lg:flex lg:gap-x-12">
						<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Parcours</a>
						<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Tarifs</a>
						<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Actualités</a>
						<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Contact</a>
					</div>
					<div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
				</nav>
			</header>
			<div class="relative isolate px-6 pt-14 lg:px-8">
				<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
					<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2a4120] to-[#cadb3a] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
				</div>
				<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div class="hidden sm:mb-8 sm:flex sm:justify-center">	</div>
					<div class="text-center">
						<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Ça vous branche ?</h1>
						<p class="mt-6 text-lg leading-8 text-gray-600">Venez vous amuser sur notre site d'accrobranche !</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<a href="#" class="rounded-md bg-[#49a010] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Nous contacter</a>
							<a href="#" class="text-sm font-semibold leading-6 text-gray-900">En savoir +</a>
						</div>
					</div>
				</div>
				<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
					<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2a4120] to-[#cadb3a] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
