import createContent from "./website";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

createContent();

const changePage = (name) => {
	const main = document.querySelector(".main");
	main.innerHTML = "";
	switch (name) {
		case "home":
			createHome();
			break;
		case "menu":
			createMenu();
			break;
		case "about":
			createContact();
			break;
	}
};

const lis = document.querySelectorAll("li");
lis.forEach((child) => {
	child.addEventListener("click", (e) => {
		changePage(e.target.id);
	});
});

createHome();
