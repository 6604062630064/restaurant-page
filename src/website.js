const createContent = () => {
	const content = document.createElement("div");
	content.classList.add("content");

	const header = document.createElement("div");
	header.classList.add("header");

	const footer = document.createElement("div");
	footer.classList.add("footer");

	const copyright = document.createElement("h3");
	copyright.textContent = "Copyright @ 2023";
	footer.appendChild(copyright);
	const tabs = ["Home", "Menu", "About"];
	const ul = document.createElement("ul");

	tabs.forEach((element) => {
		const list = document.createElement("li");
		list.textContent = element;
		list.setAttribute("id", element.toLowerCase());
		ul.appendChild(list);
	});

	header.appendChild(ul);
	content.append(header);
	const body = document.querySelector("body");

	const main = document.createElement("div");
	main.classList.add("main");
	content.appendChild(main);
	content.appendChild(footer);
	body.appendChild(content);
};

export default createContent;
