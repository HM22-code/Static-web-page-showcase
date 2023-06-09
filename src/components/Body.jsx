import React from "react";
import Banner from "./Banner";

function Body() {
	return (
		<div>
			<Banner />
			<div className="flex flex-col md:flex-row">
				<h1>Venez vous amuser sur notre site d'accrobranche!</h1>
				<h2>+ de 35 parcours!</h2>
				<p>
					Avec nos 50 tyroliennes dont 3 géantes de plus de 500
					mètres, affrontez vos peurs et sautez dans le vide!
				</p>
				<p>
					Des parcours avec des niveaux de difficulté allant de blanc
					à noir, des parcours d'1 mètre à 25 mètres de hauteur, il y
					en a pour tout le monde notamment grâce à une partie enfant
					et une partie adulte!
				</p>
			</div>
			<img src="./assets/img/home.jpg" alt="" />
		</div>
	);
}

export default Body;
