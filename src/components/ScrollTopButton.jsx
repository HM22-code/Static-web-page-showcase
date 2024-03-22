import React from "react";

function ScrollTopButton() {
	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			className="fixed bottom-5 right-5 flex h-12 w-12 cursor-pointer justify-center rounded-full bg-white align-middle hover:bg-slate-300 dark:bg-white"
			onClick={scrollUp}
		>
			<img src="./assets/svg/arrow-up.svg" alt="Arrow-up icon" />
		</button>
	);
}

export default ScrollTopButton;
