import React from "react";

function Banner() {
	return (
		<div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#2a4120] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
			<div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
				<div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#2a4120] to-[#cadb3a] opacity-30"></div>
			</div>
			<div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
				<div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#2a4120] to-[#cadb3a] opacity-30"></div>
			</div>
			<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
				<p class="text-sm leading-6 text-gray-300">
					<strong class="text-white font-semibold">Évènement</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1"/></svg>Nocturnes les nuit du 7 et 9 Juin.
				</p>
				<a href="#" class="flex-none rounded-full bg-[#49a010] px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#90ff47] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">En savoir +</a>
			</div>
			<div class="flex flex-1 justify-end"></div>
		</div>	
	);
}

export default Banner;
