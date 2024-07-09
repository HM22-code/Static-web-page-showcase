import React from "react";

function Parkour() {
	return (
		<section
			id="Parcours"
			data-aos="fade-up"
			data-aos-easing="linear"
			data-aos-duration="1500"
		>
			<div class="bg-white dark:bg-gray-900 py-24 sm:py-32">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
						<div class="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt class="text-base leading-7 text-gray-600 dark:text-gray-300">Parcours familles</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-[#49a010]">20</dd>
						</div>
						<div class="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt class="text-base leading-7 text-gray-600 dark:text-gray-300">Parcours enfants</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-[#49a010]">16</dd>
						</div>
						<div class="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt class="text-base leading-7 text-gray-600 dark:text-gray-300">Parcours sportifs</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-[#49a010]">14</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	);
}

export default Parkour;
