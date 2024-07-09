import React from "react";
import home from "../assets/img/home.jpg";

function Blog() {
	return (
        <section
			id="Actualites"
            class="bg-white dark:bg-gray-900 py-24 sm:py-32"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
        >
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-7xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Actualités</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">Les dernières nouvelles et activités sur le parc.</p>
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article class="flex max-w-xl flex-col items-start justify-between  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                        <a href="#">
                            <img class="rounded-t-lg" src={home} alt=""/>
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem Ipsum</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#49a010] rounded-lg hover:bg-[#90ff47] focus:ring-4 focus:outline-none focus:ring-[#90ff47] dark:bg-[#49a010] dark:hover:bg-[#49a010] dark:focus:ring-[#49a010]">
                                En savoir +
                            </a>
                        </div>
                </article>
                <article class="flex max-w-xl flex-col items-start justify-between  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                        <a href="#">
                            <img class="rounded-t-lg" src={home} alt=""/>
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem Ipsum</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#49a010] rounded-lg hover:bg-[#90ff47] focus:ring-4 focus:outline-none focus:ring-[#90ff47] dark:bg-[#49a010] dark:hover:bg-[#49a010] dark:focus:ring-[#49a010]">
                                En savoir +
                            </a>
                        </div>
                </article>
                <article class="flex max-w-xl flex-col items-start justify-between  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                        <a href="#">
                            <img class="rounded-t-lg" src={home} alt=""/>
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem Ipsum</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#49a010] rounded-lg hover:bg-[#90ff47] focus:ring-4 focus:outline-none focus:ring-[#90ff47] dark:bg-[#49a010] dark:hover:bg-[#49a010] dark:focus:ring-[#49a010]">
                                En savoir +
                            </a>
                        </div> 
                </article>
            </div>
        </div>
        </section>
	);
}

export default Blog;