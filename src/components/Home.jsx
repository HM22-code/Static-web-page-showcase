import React from "react";
import zipline from "../assets/img/zipline.jpg";

function Home() {
	return (
		<section
			id="Accueil"
			className="pb-10"
			data-aos="fade-up"
			data-aos-easing="linear"
			data-aos-duration="1500"
		>
			<div className="m-5 flex flex-col rounded-xl border border-slate-200 shadow-xl dark:bg-slate-800 dark:shadow-slate-800 xl:flex-row">
				<div className="flex flex-col justify-around p-10">
					<h1 className="font-serif text-3xl dark:text-white">
						Venez vous amuser sur notre site d'accrobranche !
					</h1>
					<h2 className="font-serif text-xl dark:text-white">
						+ de 35 parcours !
					</h2>
					<p className="text-justify text-base dark:text-white">
						Avec nos 50 tyroliennes dont 3 géantes de plus de 500
						mètres, affrontez vos peurs et sautez dans le vide ! Des
						parcours avec des niveaux de difficulté allant de blanc
						à noir, des parcours d'1 mètre à 25 mètres de hauteur,
						il y en a pour tout le monde notamment grâce à une
						partie enfant et une partie adulte !
					</p>
				</div>
				<div className="h-full w-full">
					<img
						src={zipline}
						alt="Zipline"
						className="h-auto max-w-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

export default Home;
